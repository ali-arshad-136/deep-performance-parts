"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Zap, Palette, Eye, Wrench } from "lucide-react"
import { useState } from "react"
import { addToCart } from "@/lib/cart"
import { useParams } from "next/navigation"

// Extended product data with detailed information
const productData = {
  "1": {
    id: 1,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 3 Series | M3 (F30/F31) - LED Headlights only",
    price: "€149.00 USD",
    originalPrice: "€199.00 USD",
    onSale: true,
    image: "/bmw-red-car-with-yellow-drl-headlights.jpg",
    images: [
      "/bmw-red-car-with-yellow-drl-headlights.jpg",
      "/bmw-headlight-with-yellow-drl-modules-close-up.jpg",
      "/bmw-3-series-car-side-view-dark-background.jpg",
    ],
    description:
      "Transform your BMW 3 Series with our premium DRL modules. These plug-and-play modules provide stunning yellow DRL functionality with easy 5-minute installation.",
    features: [
      "Plug & Play installation - no coding required",
      "Color change via headlight flasher (White & Yellow)",
      "Integrated strobe effect for show mode",
      "OEM look without visible cable clutter",
      "Compatible with F30/F31 LED headlights only",
    ],
    specifications: {
      Compatibility: "BMW 3 Series F30/F31, M3 F80",
      "Headlight Type": "LED Headlights only",
      "Installation Time": "5 minutes",
      Colors: "White & Yellow DRL",
      Warranty: "2 years",
    },
    inStock: true,
    rating: 4.8,
    reviews: 127,
  },
  "2": {
    id: 2,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 4 Series F32/F33/F36 | M4 (F82/F83) - Headlights only",
    price: "€149.00 USD",
    image: "/bmw-grey-car-with-yellow-drl-headlights.jpg",
    images: ["/bmw-grey-car-with-yellow-drl-headlights.jpg", "/bmw-headlight-with-yellow-drl-modules-close-up.jpg"],
    description:
      "Premium DRL modules designed specifically for BMW 4 Series. Experience the aggressive look with our yellow DRL technology.",
    features: [
      "Plug & Play installation",
      "Dual color functionality",
      "Show mode strobe effect",
      "Clean OEM appearance",
    ],
    specifications: {
      Compatibility: "BMW 4 Series F32/F33/F36, M4 F82/F83",
      "Headlight Type": "LED Headlights only",
      "Installation Time": "5 minutes",
      Colors: "White & Yellow DRL",
      Warranty: "2 years",
    },
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  // Add more products as needed
}

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[productId as keyof typeof productData]

  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    try {
      const cartItem = {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      }
      addToCart(cartItem)
      alert(`${product.name} added to cart!`)
    } catch (error) {
      console.error("Error adding to cart:", error)
      alert("Error adding product to cart. Please try again.")
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.onSale && (
                <Badge className="absolute top-4 left-4 bg-yellow-400 text-black font-semibold">Sale</Badge>
              )}
            </div>

            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-yellow-400" : "border-gray-600"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-yellow-400">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                )}
                {product.onSale && (
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    Save{" "}
                    {Math.round(
                      ((Number.parseFloat(product.originalPrice?.replace("€", "").replace(" USD", "") || "0") -
                        Number.parseFloat(product.price.replace("€", "").replace(" USD", ""))) /
                        Number.parseFloat(product.originalPrice?.replace("€", "").replace(" USD", "") || "1")) *
                        100,
                    )}
                    %
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-400 font-semibold">✓ In Stock</span>
                ) : (
                  <span className="text-red-400 font-semibold">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold">Quantity:</label>
                <div className="flex items-center border border-gray-600 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-gray-600">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 hover:bg-gray-700">
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || !product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-400 border-red-400" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="text-center">
                <Truck className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-xs text-gray-400">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="space-y-8">
          {/* Description */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                    <span className="font-semibold text-gray-300">{key}:</span>
                    <span className="text-gray-400">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Why Choose Deep Performance Parts?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Plug & Play</h4>
                  <p className="text-sm text-gray-400">Easy 5-minute installation</p>
                </div>
                <div className="text-center">
                  <Palette className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Dual Color</h4>
                  <p className="text-sm text-gray-400">White & yellow sequence</p>
                </div>
                <div className="text-center">
                  <Eye className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Show Mode</h4>
                  <p className="text-sm text-gray-400">Strobe effect integrated</p>
                </div>
                <div className="text-center">
                  <Wrench className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">OEM Look</h4>
                  <p className="text-sm text-gray-400">Clean installation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
