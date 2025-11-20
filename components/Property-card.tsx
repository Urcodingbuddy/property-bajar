"use client"

import { Heart, MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Property {
  id: number
  title: string
  subtitle: string
  image: string
  featured?: boolean
  price: string
  pricePerSqft: string
  area: string
  status: string
  bhk: string
  builder?: string
  description?: string
  viewed?: string
  daysAgo?: string
  label?: string
  verified?: boolean
}

export default function PropertyCard({ property }: { property: Property }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Image Section */}
        <div className="relative md:col-span-1 h-56 md:h-auto rounded-lg overflow-hidden bg-muted">
          <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-full object-cover" />

          {/* Featured Badge */}
          {property.featured && (
            <div className="absolute top-3 left-3 bg-blue-900 text-white px-2 py-1 rounded text-xs font-semibold">
              FEATURED
            </div>
          )}

          {/* Label */}
          {property.label && !property.featured && (
            <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
              {property.label}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          >
            <Heart size={20} className={isFavorite ? "fill-primary text-primary" : "text-muted-foreground"} />
          </button>

          {/* Viewed Count */}
          {property.viewed && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <Eye size={12} />
              {property.viewed}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            {/* Title and Location */}
            <div className="mb-3">
              <h3 className="font-bold text-lg text-foreground">{property.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin size={14} />
                {property.subtitle}
              </p>
            </div>

            {/* Price and Area Grid */}
            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
              <div>
                <p className="text-2xl font-bold text-foreground">{property.price}</p>
                <p className="text-xs text-muted-foreground">{property.pricePerSqft}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{property.area}</p>
                <p className="text-xs text-muted-foreground">Super Built-up Area</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{property.bhk}</p>
                <p className="text-xs text-muted-foreground">{property.status}</p>
              </div>
            </div>

            {/* Description */}
            {property.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{property.description}</p>
            )}

            {/* Builder Info */}
            {property.builder && <p className="text-xs text-muted-foreground mb-3">Builder • {property.daysAgo}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/5 bg-transparent">
              View Number
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
