"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"   // ✅ add this
import { Heart } from "lucide-react"

import { cn } from "@/components/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface PropertyCardProps {
  property: {
    _id: string
    title: string
    price: number
    category?: string
    createdBy: {
      name: string
      email: string
      role: string
    }
    images: {
      _id: string
      filename: string
    }[]
    createdAt: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const router = useRouter()   // ✅ initialize router

  const primaryImage = property.images?.[0]
  const imageUrl = primaryImage ? `/api/upload/${primaryImage._id}` : "/diverse-property-showcase.png"

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(property.price)

  // ✅ handle “View Details”
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(`/property/${property._id}`)
  }

  return (
    <Link href={`/property/${property._id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300 cursor-pointer h-full flex flex-col">
        <div className="relative w-full aspect-video bg-muted overflow-hidden group">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority={false}
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110 z-10"
            aria-label="Add to wishlist"
          >
            <Heart
              size={20}
              className={cn("transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600")}
            />
          </button>

          {property.category && (
            <Badge variant="default" className="absolute bottom-3 left-3">
              {property.category}
            </Badge>
          )}

          {property.images && property.images.length > 0 && (
            <Badge variant="outline" className="absolute bottom-3 right-3 bg-white/90">
              {property.images.length} {property.images.length === 1 ? "image" : "images"}
            </Badge>
          )}
        </div>

        <CardHeader className="flex-1">
          <h3 className="text-lg font-semibold line-clamp-2 text-card-foreground">{property.title}</h3>
          <p className="text-sm text-muted-foreground">By {property.createdBy.name}</p>
        </CardHeader>

        <CardContent className="py-0">
          <p className="text-2xl font-bold text-primary">{formattedPrice}</p>
        </CardContent>

        <CardFooter className="flex gap-2 pt-4">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={handleViewDetails}     // ✅ now works
          >
            View Details
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              // Optional: add contact modal or redirect later
            }}
          >
            Contact
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
