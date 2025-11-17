"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-[#8812FC] to-[#6D10F4] shadow-lg">
      <div className="px-4 md:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="w-50">
            <img src="./logo.png" alt="" />
          </div>

          <nav className="hidden lg:flex items-center gap-1 lg:gap-2 ">
            <Link
              href="#"
              className="text-white hover:text-purple-100 cursor-pointer font-semibold text-md xl:text-md px-2 md:px-2 xl:px-8 transition"
            >
              For Buyers
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 cursor-pointer font-semibold text-md xl:text-md px-2 md:px-2 xl:px-8 transition"
            >
              For Tenants
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 cursor-pointer font-semibold text-md xl:text-md px-2 md:px-2 xl:px-8 transition"
            >
              For owners
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 cursor-pointer font-semibold text-md xl:text-md px-2 md:px-2 xl:px-8 transition"
            >
              For Dealers
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-100 cursor-pointer font-semibold text-md xl:text-md px-2 md:px-2 xl:px-8 transition"
            >
              For Students
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-[#FEE484] hover:bg-[#FDDC6B] cursor-pointer text-black font-bold">
              Post Property
            </Button>
            <button className="p-2 text-white cursor-pointer rounded-lg transition">
              <img src="./userico.svg" alt="" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 text-white rounded-lg transition">
              <svg
                className="w-5 h-5 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-purple-500 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-purple-500">
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="#"
                className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block"
              >
                For Buyers
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block"
              >
                For Tenants
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block"
              >
                For owners
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block"
              >
                For Dealers
              </Link>
              <Link
                href="#"
                className="text-white hover:text-purple-100 px-4 py-2 text-sm transition block"
              >
                For Students
              </Link>
              <Button className="bg-[#FEE484] text-black font-semibold w-full mt-2">
                Post Property
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
