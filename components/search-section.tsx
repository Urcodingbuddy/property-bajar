"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crosshair, Mic, MoveDown, Search } from "lucide-react";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("buy");

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "commercial", label: "Commercial" },
    { id: "plots", label: "Plots/Land" },
    { id: "projects", label: "Projects" },
    { id: "newlaunch", label: "New Launch" },
    { id: "post-property", label: "Post Property" },
  ];

  return (
    <section className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-20 z-10 px-3 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
      <div className="mx-auto w-full sm:max-w-lg md:max-w-3xl lg:max-w-6xl">
        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6">
          
          {/* Tabs */}
          <div className="flex gap-1 sm:gap-2 border-b border-gray-200 overflow-x-auto scrollbar-hide pb-2 sm:pb-3 mb-3 sm:mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-5 py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-gray-900 border-b-2 border-purple-800"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {tab.id === "post-property" && (
                  <span className="ml-2 bg-gradient-to-b from-green-600 to-green-700 text-white font-semibold text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md border border-green-800 shadow-sm">
                    Free
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Bar Section */}
          <div className="pt-2 sm:pt-3 md:pt-4">
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-3 md:gap-4 w-full">
              
              {/* Left Group */}
              <div className="flex flex-1 items-center gap-2 sm:gap-2.5 min-w-0">
                
                {/* Dropdown */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-2 md:py-2.5 shrink-0 h-11 sm:h-11 md:h-12">
                  <span className="text-gray-700 font-medium text-sm sm:text-base truncate">
                    All Residential
                  </span>
                  <MoveDown className="text-slate-400" />
                </div>

                {/* Search Input */}
                <div className="flex flex-1 items-center gap-2 bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-2 md:py-2.5 min-w-0 h-11 sm:h-11 md:h-12">
                  <Search className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search 3BHK"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 text-sm sm:text-base outline-none min-w-0"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold px-4 sm:px-5 md:px-6 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap text-sm sm:text-base flex-shrink-0 transition-colors duration-200 h-11 sm:h-11 md:h-12">
                <span className="hidden sm:inline">Search Here</span>
                <span className="inline sm:hidden">Search</span>
                <Crosshair />
                <Mic />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
