"use client"

import { useState } from "react"
import { Menu, X, MapPin, ChevronRight, ChevronDown } from "lucide-react"
import PropertyCard from "@/components/Property-card"
import Filters from "@/components/Filters"
import MobileBottomNav from "@/components/Mobile-btn-nav"

export default function Page() {
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const properties = [
    {
      id: 1,
      title: "Serenity Reserve",
      subtitle: "3 BHK Flat in Scheme No 140 Indore",
      image: "./acharaya-building.jpg",
      featured: true,
      price: "₹2.5 - 2.6 Cr",
      pricePerSqft: "₹9,383 /sqft",
      area: "2,710-2,725 sqft (252 - 253 sqm)",
      status: "Under",
      bhk: "3 BHK",
      builder: "PRAKRATI REALTORS...",
      description:
        "Enjoy a blissful living experience in Serenity Reserve. This residential project encompasses 3 BHK flats in Scheme No 140...",
      viewed: "2 people viewed this property",
      daysAgo: "5d ago",
      label: "FEATURED",
      verified: true,
    },
    {
      id: 2,
      title: "Girdhar Villa",
      subtitle: "3 BHK Flat in Indrapuri Colony, Indore",
      image: "./fortune-building.jpg",
      featured: false,
      price: "₹65 Lac",
      pricePerSqft: "₹5,416 /sqft",
      area: "1,200 sqft (111 sqm)",
      status: "Ready To Move",
      bhk: "3 BHK (2 Baths)",
      description: "Corner 3bhk flat, near bhawarkua",
      viewed: "1mo ago",
      label: "RESALE",
      verified: false,
    },
    {
      id: 3,
      title: "Nipania, Indore",
      subtitle: "3 Bedroom House in Nipania, Indore",
      image: "./kolar-building.jpg",
      featured: false,
      price: "₹85 Lac",
      pricePerSqft: "₹14,166 /sqft",
      area: "600 sqft (56 sqm)",
      status: "Ready To Move",
      bhk: "3 BHK (3 Baths)",
      label: "RESALE",
      verified: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="py-3 text-sm text-muted-foreground hidden md:block">Home • Property in Indore</div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button onClick={() => setShowFilters(!showFilters)} className="md:hidden">
                {showFilters ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-foreground">1250 results | 3 BHK Property in Indore for Sale</h1>
              </div>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="md:hidden pb-4">
            <h1 className="text-base font-bold text-foreground">1250 results | 3 BHK Property</h1>
          </div>

          {/* Info Banner */}
          <div className="hidden md:flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <MapPin size={20} className="text-amber-600 shrink-0" />
            <span className="text-sm text-foreground">
              Get to know more about <span className="font-semibold">Indore</span>
            </span>
            <span className="text-primary cursor-pointer flex items-center gap-1 ml-auto">
              View Insights <ChevronRight size={16} />
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <Filters />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Filter Tabs */}
            <div className="mb-6 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                {[
                  { id: "all", label: "All", icon: "🎯" },
                  { id: "launch", label: "NEW LAUNCH", icon: "🚀" },
                  { id: "owner", label: "Owner" },
                  { id: "verified", label: "Verified" },
                  { id: "construction", label: "Under construction" },
                  { id: "ready", label: "Ready To Move" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tab.icon && <span className="mr-1">{tab.icon}</span>}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground hidden md:block">
                Showing {properties.length} properties
              </div>
              <button className="flex items-center gap-2 text-foreground font-medium hover:text-primary">
                Sort By <ChevronDown size={16} />
              </button>
            </div>

            {/* Property Cards */}
            <div className="space-y-4">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-30 top-0 left-0">
            <div className="bg-white h-screen w-full overflow-y-auto max-w-sm">
              <div className="p-4 flex items-center justify-between border-b">
                <h2 className="font-bold text-lg">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="p-4">
                <Filters />
              </div>
            </div>
          </div>
        )}
      </div>
      <MobileBottomNav />
    </div>
  )
}