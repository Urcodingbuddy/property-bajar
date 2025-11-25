"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

export default function Filters() {
  const [expandedSection, setExpandedSection] = useState<string | null>("applied")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="space-y-4">
      {/* Applied Filters */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-foreground">Applied Filters</h3>
          <a href="#" className="text-primary text-sm font-semibold hover:underline">
            Clear All
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            3 BHK
            <X size={14} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Hide already seen */}
      <div className="border rounded-lg p-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4" defaultChecked />
          <span className="text-sm text-foreground">Hide already seen</span>
        </label>
      </div>

      {/* Verified properties */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("verified")}>
          <h3 className="font-semibold text-foreground">Verified properties</h3>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === "verified" ? "rotate-180" : ""}`}
          />
        </div>
        {expandedSection === "verified" && (
          <div className="mt-3">
            <label className="flex items-center gap-2 cursor-pointer mb-2">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-sm">✓ Verified</span>
            </label>
            <p className="text-xs text-muted-foreground ml-6">by indiared verification team</p>
          </div>
        )}
      </div>

      {/* Budget */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleSection("budget")}>
          <h3 className="font-semibold text-foreground">Budget</h3>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === "budget" ? "rotate-180" : ""}`}
          />
        </div>
        {expandedSection === "budget" && (
          <div className="space-y-3">
            <select className="w-full border rounded p-2 text-sm">
              <option>No min</option>
            </select>
            <select className="w-full border rounded p-2 text-sm">
              <option>No max</option>
            </select>
          </div>
        )}
      </div>

      {/* Type of property */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between cursor-pointer mb-3" onClick={() => toggleSection("type")}>
          <h3 className="font-semibold text-foreground">Type of property</h3>
          <ChevronDown size={18} className={`transition-transform ${expandedSection === "type" ? "rotate-180" : ""}`} />
        </div>
        {expandedSection === "type" && (
          <div className="space-y-2">
            {[
              "Independent House/Villa",
              "Residential Apartment",
              "Independent/Builder Floor",
              "Farm House",
              "Residential Land",
            ].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" className="w-4 h-4" />
                {type}
              </label>
            ))}
            <p className="text-primary text-sm font-semibold mt-2">+ 1 more</p>
          </div>
        )}
      </div>

      {/* No. of Bedrooms */}
      <div className="border rounded-lg p-4">
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection("bedrooms")}
        >
          <h3 className="font-semibold text-foreground">No. of Bedrooms</h3>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === "bedrooms" ? "rotate-180" : ""}`}
          />
        </div>
        {expandedSection === "bedrooms" && (
          <div className="flex flex-wrap gap-2">
            {["1 RK/1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"].map((bhk) => (
              <button
                key={bhk}
                className={`px-3 py-1 rounded border text-sm font-medium transition-colors ${
                  bhk === "3 BHK"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                {bhk}
              </button>
            ))}
            <p className="text-primary text-sm font-semibold w-full mt-2">+ 5 more</p>
          </div>
        )}
      </div>
    </div>
  )
}