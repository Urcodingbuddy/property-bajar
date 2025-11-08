"use client"

import * as React from "react"
import { PropertyCard } from "@/components/property-card"
import { PropertyCardSkeleton } from "@/components/property-card-skeleton"

interface Property {
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

interface PropertyGridProps {
  properties: Property[]
  title?: string
  isLoading?: boolean
}

export function PropertyGrid({ properties = [], title, isLoading = false }: PropertyGridProps) {
  return (
    <section className="max-w-7xl mx-auto w-full">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {title}
        </h2>
      )}

      {/* Skeleton Loading */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No properties found.
        </div>
      )}
    </section>
  )
}
