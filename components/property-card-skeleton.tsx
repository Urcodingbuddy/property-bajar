"use client"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="relative w-full aspect-video bg-muted">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Header (title + author) */}
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </CardHeader>

      {/* Price */}
      <CardContent className="space-y-2">
        <Skeleton className="h-6 w-1/3 rounded" />
      </CardContent>

      {/* Footer buttons */}
      <CardFooter className="flex gap-2">
        <Skeleton className="h-8 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}
