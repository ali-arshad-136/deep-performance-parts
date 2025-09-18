"use client"

import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { EmailSubscription } from "@/components/email-subscription"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights SMOKED RED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-red-smoked.jpg",
    onSale: true,
  },
  {
    id: 2,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights RED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-red-oled.jpg",
    onSale: true,
  },
  {
    id: 3,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights SMOKED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-smoked-oled.jpg",
    onSale: true,
  },
]

export default function CatalogPage() {
  const [sortBy, setSortBy] = useState("Alphabetically, A-Z")
  const [availabilityFilter, setAvailabilityFilter] = useState("All")
  const [priceFilter, setPriceFilter] = useState("All")

  const handleAvailabilityFilter = () => {
    console.log("[v0] Availability filter clicked")
    // Could open dropdown or modal for filter options
  }

  const handlePriceFilter = () => {
    console.log("[v0] Price filter clicked")
    // Could open dropdown or modal for price range
  }

  const handleSortChange = () => {
    console.log("[v0] Sort option clicked")
    // Could cycle through sort options or open dropdown
    const sortOptions = ["Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low"]
    const currentIndex = sortOptions.indexOf(sortBy)
    const nextIndex = (currentIndex + 1) % sortOptions.length
    setSortBy(sortOptions[nextIndex])
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="bg-neutral-100 dark:bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-neutral-800 mb-12">Products</h1>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-neutral-600">Filter:</span>
              <Button
                variant="ghost"
                className="text-neutral-600 hover:text-neutral-800 p-0 h-auto font-normal"
                onClick={handleAvailabilityFilter}
              >
                Availability <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-neutral-600 hover:text-neutral-800 p-0 h-auto font-normal"
                onClick={handlePriceFilter}
              >
                Price <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-600">Sort by:</span>
              <Button
                variant="ghost"
                className="text-neutral-600 hover:text-neutral-800 p-0 h-auto font-normal"
                onClick={handleSortChange}
              >
                {sortBy} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <span className="text-neutral-600">3 products</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <EmailSubscription />
      <Footer />
    </div>
  )
}
