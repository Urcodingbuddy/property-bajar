"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, Mic, MapPin, X } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

type PropertyType =
  | "Flat/Apartment"
  | "Residential Land"
  | "Serviced Apartments"
  | "Independent/Builder Floor"
  | "1 RK/Studio Apartment"
  | "Other"
  | "Independent House/Villa"
  | "Farm House";

const PROPERTY_TYPES: PropertyType[] = [
  "Flat/Apartment",
  "Residential Land",
  "Serviced Apartments",
  "Independent/Builder Floor",
  "1 RK/Studio Apartment",
  "Other",
  "Independent House/Villa",
  "Farm House",
];

export function SearchBar() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<Record<string, boolean>>(
    {}
  );

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {

    const init: Record<string, boolean> = {};
    PROPERTY_TYPES.forEach((t) => (init[t] = false));
    setSelectedTypes(init);
  }, []);
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const tgt = e.target as Node;
      if (
        filtersOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(tgt) &&
        panelRef.current &&
        !panelRef.current.contains(tgt)
      ) {
        setFiltersOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFiltersOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [filtersOpen]);
  const toggleType = (type: PropertyType) => {
    setSelectedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleVoice = () => setIsListening((s) => !s);

  return (
    <div className="w-full px-2 md:px-4 absolute bottom-3 z-40">
      <div className="max-w-4xl mx-auto">
        {}
        <div className="flex justify-evenly bg-white rounded-t-xl overflow-x-auto border-b border-gray-200 p-1">
          {[
            "Buy",
            "Rent",
            "Commercial",
            "Plots/Land",
            "Projects",
            "New Launch",
          ].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-6 py-3 whitespace-nowrap font-medium text-sm transition-colors h-12 flex items-center ${
                activeTab === t
                  ? "text-gray-900 rounded-t-2xl border-b-4 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              aria-pressed={activeTab === t}
            >
              {t}
            </button>
          ))}
          <div className="border my-2" />
          <button className="px-6 py-3 whitespace-nowrap font-medium text-sm h-12 flex items-center">
            Post Property
            <span className="ml-2 bg-linear-to-b from-[#1B8700] to-[#072100] text-white text-xs px-2 py-0.5 rounded">
              Free
            </span>
          </button>
        </div>

        {}
        <div
          className="bg-white rounded-xl rounded-t-none shadow-lg p-3 md:p-6 relative z-50"
          ref={wrapperRef}
        >
          {}
          <div className="md:hidden flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-200 bg-white transition-colors h-10">
              <MapPin size={16} className="text-gray-400 shrink-0" />
              <input
                aria-label="Search location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search location"
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
              />
              <button
                onClick={handleVoice}
                className={`shrink-0 p-1.5 rounded transition-colors ${
                  isListening
                    ? "bg-purple-100 text-purple-600"
                    : "hover:bg-gray-100 text-gray-400"
                }`}
                aria-pressed={isListening}
              >
                <Mic size={16} />
              </button>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 h-10 text-sm">
              <Search size={16} />
              Search
            </Button>
          </div>

          {}
          <div className="flex gap-4 items-center h-12">
            {}
            <div className=" flex-0">
              <button
                ref={buttonRef}
                onClick={() => setFiltersOpen((s) => !s)}
                aria-expanded={filtersOpen}
                aria-controls="property-filter-panel"
                className="flex items-center justify-center gap-2 px-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors text-gray-700 font-medium h-12 min-w-max"
              >
                <span>Property Types</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform ${
                    filtersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {}
            <div className="flex-1 flex items-center gap-3 px-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors h-full">
              <MapPin size={20} className="text-gray-400 shrink-0" />
              <input
                aria-label="Search query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search 3BHK"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={handleVoice}
                className={`shrink-0 p-2 rounded transition-colors ${
                  isListening
                    ? "bg-purple-100 text-purple-600"
                    : "hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                }`}
                aria-pressed={isListening}
              >
                <Mic size={20} />
              </button>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-0 rounded-lg flex items-center justify-center gap-2 h-full whitespace-nowrap">
              <Search size={18} />
              Search Here
            </Button>
          </div>
        </div>

        {}
        {filtersOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40">
            <div className="fixed bottom-0 left-0 right-0 bg-white rounded-b-lg p-4 max-h-[85vh] overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Property Types</h3>
                <button
                  onClick={() => setFiltersOpen(false)}
                  aria-label="Close"
                  className="p-2"
                >
                  <X />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {PROPERTY_TYPES.map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={!!selectedTypes[type]}
                      onChange={() => toggleType(type)}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 rounded-full border">
                  Budget
                </button>
                <button className="flex-1 px-4 py-2 rounded-full border">
                  Bedroom
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {}
      <div
        id="property-filter-panel"
        ref={panelRef}
        role="dialog"
        aria-hidden={!filtersOpen}
        className={`absolute w-full max-w-4xl mx-auto left-0 right-0 -mt-0.5 -z-10 rounded-b-xl border border-t-0 bg-white shadow-lg transform transition-all duration-200 ${
          filtersOpen
            ? "opacity-100 translate-y-0 pointer-events-auto z-20"
            : "opacity-0 -translate-y-3 pointer-events-none z-0"
        }`}
        style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
      >
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
            {PROPERTY_TYPES.map((type) => (
              <label
                key={type}
                className="flex items-center gap-3 text-gray-700 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={!!selectedTypes[type]}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4 border-gray-400 rounded"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>

          <div className="text-sm text-gray-600 mt-6">
            Looking for commercial properties?{" "}
            <button className="text-blue-600 underline">Click here</button>
          </div>

          <div className="border-t mt-6 pt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full border text-gray-700 text-sm flex items-center">
              Budget <ChevronDown size={14} className="ml-1" />
            </button>

            <button className="px-4 py-2 rounded-full border text-gray-700 text-sm flex items-center">
              Bedroom <ChevronDown size={14} className="ml-1" />
            </button>

            <button className="px-4 py-2 rounded-full border text-gray-700 text-sm flex items-center">
              Construction Status <ChevronDown size={14} className="ml-1" />
            </button>

            <button className="px-4 py-2 rounded-full border text-gray-700 text-sm flex items-center">
              Posted By <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}