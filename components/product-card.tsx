"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { useState } from "react"
import { addToCart } from "@/lib/cart"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id?: number
    name: string
    price: string
    originalPrice?: string
    image: string
    onSale?: boolean
    shopifyId?: string
    variantId?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("[v0] Quick view clicked for product:", product.name)
    // Could open a modal with product details
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
    console.log("[v0] Wishlist toggled for product:", product.name)
  }

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAddingToCart(true)

    try {
      const cartItem = {
        id: product.shopifyId || product.id?.toString() || `product_${Date.now()}`,
        name: product.name,
        price: product.price,
        image: product.image,
      }

      addToCart(cartItem)
      alert(`${product.name} added to cart!`)
    } catch (error) {
      console.error("[v0] Error adding to cart:", error)
      alert("Error adding product to cart. Please try again.")
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <Link href={`/product/${product.id}`} className="block">
      <Card className="card-enhanced group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=300&width=400&query=BMW automotive parts"}
            alt={product.name || "Product image"}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.onSale && (
            <Badge className="absolute top-3 left-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Sale
            </Badge>
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button size="sm" variant="secondary" className="shadow-lg" onClick={handleQuickView}>
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
            <Button
              size="sm"
              variant="outline"
              className={`bg-white/90 hover:bg-white shadow-lg ${isWishlisted ? "text-red-500" : ""}`}
              onClick={handleWishlistToggle}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-semibold text-card-foreground mb-3 text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
              )}
              <span className="font-bold text-lg text-primary">{product.price}</span>
            </div>
            {product.onSale && (
              <Badge variant="outline" className="text-xs">
                Save{" "}
                {Math.round(
                  ((Number.parseFloat(product.originalPrice?.replace("£", "") || "0") -
                    Number.parseFloat(product.price.replace("£", ""))) /
                    Number.parseFloat(product.originalPrice?.replace("£", "") || "1")) *
                    100,
                )}
                %
              </Badge>
            )}
          </div>

          <Button className="w-full btn-primary" onClick={handleAddToCart} disabled={isAddingToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isAddingToCart ? "Adding..." : "Add to Cart"}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
