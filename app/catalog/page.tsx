"use client"

import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { EmailSubscription } from "@/components/email-subscription"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, Lightbulb, Wheel, Zap, Settings, Car, Circle, Cpu } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { categories, type Product } from "@/lib/categories"

const products: Product[] = [
  {
    id: 1,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights SMOKED RED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-red-smoked.jpg",
    onSale: true,
    category: "lights",
  },
  {
    id: 2,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights RED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-red-oled.jpg",
    onSale: true,
    category: "lights",
  },
  {
    id: 3,
    name: "BMW 1 Series F20 F21 GTS OLED Style Tail Lights SMOKED 2015-2018",
    price: "£329.99",
    originalPrice: "£449.99",
    image: "/bmw-tail-lights-smoked-oled.jpg",
    onSale: true,
    category: "lights",
  },
  {
    id: 4,
    name: "BMW M Performance Carbon Fiber Steering Wheel F30/F31/F32/F33",
    price: "£899.99",
    originalPrice: "£1,199.99",
    image: "/placeholder.svg",
    onSale: true,
    category: "steering-wheels",
  },
  {
    id: 5,
    name: "BMW M3/M4 Competition Exhaust System F80/F82/F83",
    price: "£1,599.99",
    image: "/placeholder.svg",
    category: "exhaust-systems",
  },
  {
    id: 6,
    name: "BMW 3 Series F30 KW Coilover Suspension Kit",
    price: "£1,299.99",
    image: "/placeholder.svg",
    category: "suspension",
  },
  {
    id: 7,
    name: "BMW F30/F31 M Performance Carbon Fiber Body Kit",
    price: "£2,499.99",
    image: "/bmw-3-series-car-side-view-dark-background.jpg",
    category: "body-kits",
    featured: true,
  },
  {
    id: 8,
    name: "BMW M Performance Forged Wheels 19\" Style 763M",
    price: "£1,899.99",
    image: "/placeholder.svg",
    category: "wheels-tires",
  },
  {
    id: 9,
    name: "BMW M Performance Carbon Fiber Interior Trim Set",
    price: "£599.99",
    image: "/placeholder.svg",
    category: "interior",
  },
  {
    id: 10,
    name: "BMW F30/F31 ECU Performance Tune Stage 1",
    price: "£449.99",
    image: "/placeholder.svg",
    category: "engine-performance",
  },
]

export default function CatalogPage() {
  const searchParams = useSearchParams()
  const [sortBy, setSortBy] = useState("Alphabetically, A-Z")
  const [availabilityFilter, setAvailabilityFilter] = useState("All")
  const [priceFilter, setPriceFilter] = useState("All")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Set initial category filter from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.find(cat => cat.id === categoryParam)) {
      setCategoryFilter(categoryParam)
    }
  }, [searchParams])

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

  // Filter products based on selected category
  const filteredProducts = categoryFilter === "all"
    ? products
    : products.filter(product => product.category === categoryFilter)

  // Get icon component for category
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Lightbulb,
      Wheel,
      Zap,
      Settings,
      Car,
      Circle,
      Cpu
    }
    return iconMap[iconName] || Car
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="bg-neutral-100 dark:bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-neutral-800 mb-8">Products</h1>

          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-neutral-800 mb-4">Shop by Category</h2>
            <div className="flex flex-wrap gap-3">
              <Button
                variant={categoryFilter === "all" ? "default" : "outline"}
                onClick={() => setCategoryFilter("all")}
                className="mb-2"
              >
                All Categories
              </Button>
              {categories.map((category) => {
                const IconComponent = getIcon(category.icon)
                return (
                  <Button
                    key={category.id}
                    variant={categoryFilter === category.id ? "default" : "outline"}
                    onClick={() => setCategoryFilter(category.id)}
                    className="mb-2 flex items-center gap-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>

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
              <span className="text-neutral-600">{filteredProducts.length} products</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
