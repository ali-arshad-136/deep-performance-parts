"use client"

import { Search, ShoppingCart, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { getCartItemCount } from "@/lib/cart"

export function Header() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setCartCount(getCartItemCount())

    const handleCartUpdate = () => {
      setCartCount(getCartItemCount())
    }

    window.addEventListener("cartUpdated", handleCartUpdate)

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate)
    }
  }, [])

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - empty for spacing */}
          <div className="w-24"></div>

          {/* Center - Logo and Heading */}
          <div className="flex-1 flex items-center justify-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/logo.jpg" 
                alt="Deep Performance Parts Logo" 
                width={50} 
                height={50} 
                className="object-cover rounded"
              />
              <h1 className="text-2xl font-bold text-white tracking-wider">DEEP PERFORMANCE PARTS</h1>
            </Link>
            
            {/* Parts Categories Dropdown */}
            <div className="relative group">
              <Button 
                variant="ghost" 
                className="text-white hover:text-yellow-400 flex items-center gap-1 transition-colors"
              >
                Parts
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </Button>
              
              <div className="absolute top-full left-0 mt-1 w-48 bg-black border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link 
                    href="/catalog?category=steering-wheels-led"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  >
                    Steering Wheels LED
                  </Link>
                  <Link 
                    href="/catalog?category=exhaust-systems"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  >
                    Exhaust Systems
                  </Link>
                  <Link 
                    href="/catalog?category=down-pipes"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  >
                    Down Pipes
                  </Link>
                  <Link 
                    href="/catalog?category=custom-headlights"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  >
                    Custom Headlights
                  </Link>
                  <Link 
                    href="/catalog?category=alloys-rims"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                  >
                    Alloys/Rims
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center gap-4 w-24 justify-end">
            <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
