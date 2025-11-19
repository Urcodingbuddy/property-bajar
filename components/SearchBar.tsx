'use client'

import { useState } from 'react'
import { ChevronDown, Search, Mic, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SearchBar() {
  const [activeTab, setActiveTab] = useState('Buy')
  const [selectedCategory, setSelectedCategory] = useState('All Residential')
  const [isListening, setIsListening] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const tabs = ['Buy', 'Rent', 'Commercial', 'Plots/Land', 'Projects', 'New Launch', 'Post Property']
  const categories = ['All Residential', 'Apartments', 'Villas', 'Commercial']

  const handleVoiceSearch = () => {
    setIsListening(!isListening)
  }

  const handleSelectCategory = (category:any) => {
    setSelectedCategory(category)
    setOpenDropdown(false)
  }

  return (
    <div className="w-full px-2 md:px-4 -mt-20 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Tabs - Hidden on mobile */}
        <div className="hidden md:flex bg-white rounded-t-xl overflow-x-auto border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 whitespace-nowrap font-medium text-sm transition-colors h-12 flex items-center ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {tab === 'Post Property' && (
                <span className="ml-2 bg-linear-to-b from-[#1B8700] to-[#072100] text-white text-xs px-2 py-0.5 rounded">
                  Free
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl md:rounded-t-none  shadow-lg p-3 md:p-6">
          {/* Mobile view - Simplified */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Category Dropdown */}
            <div className="relative w-full">
              <button 
                onClick={() => setOpenDropdown(!openDropdown)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors text-gray-700 font-medium text-sm h-10"
              >
                <span className="truncate">{selectedCategory}</span>
                <ChevronDown size={16} className={`text-gray-500 shrink-0 ml-2 transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-50 w-full">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSelectCategory(category)}
                      className={`w-full text-left px-3 py-2.5 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-purple-50 text-purple-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input with Icons */}
            <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors h-10">
              <MapPin size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search location"
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
              />
              <button
                onClick={handleVoiceSearch}
                className={`shrink-0 p-1.5 rounded transition-colors ${
                  isListening ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100 text-gray-400'
                }`}
              >
                <Mic size={16} />
              </button>
            </div>

            {/* Search Button */}
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 h-10 text-sm">
              <Search size={16} />
              Search
            </Button>
          </div>

          {/* Desktop view - Full featured */}
          <div className="hidden md:flex gap-4 items-center h-12">
            {/* Category Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center justify-center gap-2 px-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors text-gray-700 font-medium h-12 min-w-max"
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={18} className={`text-gray-500 transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-50" style={{width: '100%'}}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSelectCategory(category)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-purple-50 text-purple-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input with Icons */}
            <div className="flex-1 flex items-center gap-3 px-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors h-full">
              <MapPin size={20} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search 3BHK"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={handleVoiceSearch}
                className={`shrink-0 p-2 rounded transition-colors ${
                  isListening ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                }`}
              >
                <Mic size={20} />
              </button>
            </div>

            {/* Search Button */}
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-0 rounded-lg flex items-center justify-center gap-2 h-full whitespace-nowrap">
              <Search size={18} />
              Search Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
