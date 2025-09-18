"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, Zap, Palette, Eye, Wrench } from "lucide-react"
import { useRouter } from "next/navigation"
import { ProductCard } from "@/components/product-card"

const mostPurchased = [
  {
    id: 1,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 3 Series | M3 (F30/F31) - LED Headlights only",
    price: "€149.00 USD",
    image: "/bmw-red-car-with-yellow-drl-headlights.jpg",
  },
  {
    id: 2,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 4 Series F32/F33/F36 | M4 (F82/F83) - Headlights only",
    price: "€149.00 USD",
    image: "/bmw-grey-car-with-yellow-drl-headlights.jpg",
  },
  {
    id: 3,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 1 Series F20/F21 | M135i - Headlights only",
    price: "€149.00 USD",
    image: "/bmw-blue-car-with-yellow-drl-headlights.jpg",
  },
  {
    id: 4,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW 5 Series G30/G31 | M5 (F90) - Headlights only",
    price: "€149.00 USD",
    image: "/bmw-black-car-with-yellow-drl-headlights.jpg",
  },
  {
    id: 5,
    name: "DEEP PERFORMANCE PARTS DRL modules for BMW X3/X4 G01/G02 - Headlights only",
    price: "€149.00 USD",
    image: "/bmw-white-suv-with-yellow-drl-headlights.jpg",
  },
]

export default function HomePage() {
  const router = useRouter()

  const handleFindModule = () => {
    router.push("/catalog")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bmw-car-headlight-close-up-dark-background.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">DEEP PERFORMANCE PARTS</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">EXCLUSIVE MODULES FOR YOUR VEHICLE</h1>
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 font-semibold"
                onClick={handleFindModule}
              >
                Find your suitable module now
              </Button>
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">MODULES FOR</h3>
                  <h2 className="text-2xl font-bold text-white mb-4">BMW 3 SERIES</h2>
                  <p className="text-gray-400 mb-4">F30/F31</p>
                  <img
                    src="/bmw-3-series-car-side-view-dark-background.jpg"
                    alt="BMW 3 Series"
                    className="w-full max-w-sm mx-auto rounded-lg"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">HEADLIGHTS</h3>
                  <h2 className="text-xl font-bold text-white mb-4">LCI & SERIES</h2>
                  <img
                    src="/bmw-headlight-with-yellow-drl-modules-close-up.jpg"
                    alt="Headlights LCI Series"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">MODULES FOR</h3>
                  <h2 className="text-2xl font-bold text-white mb-4">BMW X3 SERIES</h2>
                  <p className="text-gray-400 mb-4">G01/G02</p>
                  <img
                    src="/bmw-x3-suv-side-view-dark-background.jpg"
                    alt="BMW X3 Series"
                    className="w-full max-w-sm mx-auto rounded-lg"
                  />
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">TAILLIGHTS</h3>
                  <h2 className="text-xl font-bold text-white mb-4">LCI & SERIES</h2>
                  <img
                    src="/bmw-taillight-with-red-drl-modules-close-up.jpg"
                    alt="Taillights LCI Series"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Expressive DRL modules for your vehicle</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Plug & Play</h3>
                <p className="text-gray-400 text-sm">Easy installation in just 5 minutes</p>
              </div>
              <div className="text-center">
                <Palette className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Color change via headlight flasher</h3>
                <p className="text-gray-400 text-sm">White & yellow in sequence</p>
              </div>
              <div className="text-center">
                <Eye className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Strobe effect integrated</h3>
                <p className="text-gray-400 text-sm">Show mode for your BMW event</p>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Clean Look</h3>
                <p className="text-gray-400 text-sm">OEM look without visible cable clutter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">650+ satisfied customers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-semibold mb-2 text-white">The DRL's look brutal</h4>
                <p className="text-gray-400 text-sm mb-4">
                  "I got the modules for my BMW and they look absolutely brutal. The yellow DRL's give my car such an
                  aggressive look. Installation was super easy too."
                </p>
                <p className="text-sm text-gray-500">- BMW F30 Owner</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-semibold mb-2 text-white">My latest purchase from DEEP PERFORMANCE PARTS</h4>
                <p className="text-gray-400 text-sm mb-4">
                  "This was my latest purchase from DEEP PERFORMANCE PARTS and I'm extremely satisfied. The quality is
                  top notch and the customer service is excellent."
                </p>
                <p className="text-sm text-gray-500">- BMW M4 Owner</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-semibold mb-2 text-white">Fast shipping takes a little longer</h4>
                <p className="text-gray-400 text-sm mb-4">
                  "The shipping was fast and the product arrived in perfect condition. Installation was straightforward
                  and the results are amazing."
                </p>
                <p className="text-sm text-gray-500">- BMW X3 Owner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Most Purchased Products Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">MOST PURCHASED PRODUCTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {mostPurchased.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">ALSO AVAILABLE FROM US</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether brake lights, interior, grilles or and everything else can be customized on your car.
            </p>
            <Button className="bg-gray-700 text-white hover:bg-gray-600 px-8 py-3">DISCOVER NOW</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
