"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, UserPlus} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-purple-600 to-purple-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Logo */}
          <div className="w-50">
            <img src="./logo.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-2">
            <Link
              href="#"
              className="text-white hover:text-purple-100 px-3 lg:px-4 py-2 text-sm lg:text-base transition"
            >
              For Buyers
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 px-3 lg:px-4 py-2 text-sm lg:text-base transition"
            >
              For Tenants
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 px-3 lg:px-4 py-2 text-sm lg:text-base transition"
            >
              For owners
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 px-3 lg:px-4 py-2 text-sm lg:text-base transition"
            >
              For Dealers
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 px-3 lg:px-4 py-2 text-sm lg:text-base transition"
            >
              For Students
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Post Property</Button>
            <button className="p-2 text-white hover:bg-purple-500 rounded-lg transition">
              {/* User icon placeholder */}
              <UserPlus/>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 text-white hover:bg-purple-500 rounded-lg transition">
              {/* Menu icon placeholder */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-purple-500 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-purple-500">
            <div className="flex flex-col gap-2 mt-4">
              <Link href="#" className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block">
                For Buyers
              </Link>
              <Link href="#" className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block">
                For Tenants
              </Link>
              <Link href="#" className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block">
                For owners
              </Link>
              <Link href="#" className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block">
                For Dealers
              </Link>
              <Link href="#" className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block">
                For Students
              </Link>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full mt-2">
                Post Property
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
