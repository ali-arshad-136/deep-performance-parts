"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Gift } from "lucide-react"
import { useState } from "react"

export function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    console.log("[v0] Subscribing email:", email)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribing(false)
    setIsSubscribed(true)
    console.log("[v0] Email subscription successful")
  }

  const handleFollowShop = () => {
    console.log("[v0] Follow on shop clicked")
    // Could open external shop link or social media
    window.open("https://shop.deepperformanceparts.co.uk", "_blank")
  }

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Gift className="h-4 w-4" />
                Exclusive Offers
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Stay Updated with Latest Parts</h2>
              <p className="text-muted-foreground text-lg mb-6 text-pretty">
                Join our community of automotive enthusiasts and get exclusive access to new products, special
                discounts, and expert tips.
              </p>

              <div className="space-y-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Early access to new products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Exclusive member discounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Expert installation guides</span>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Subscribe Now</h3>
                  <p className="text-muted-foreground text-sm">Get 10% off your first order</p>
                </div>
              </div>

              {isSubscribed ? (
                <div className="text-center py-4">
                  <div className="text-green-600 font-semibold mb-2">✓ Successfully subscribed!</div>
                  <p className="text-muted-foreground text-sm">Check your email for your 10% discount code.</p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 h-12 bg-input border-border text-foreground placeholder:text-muted-foreground"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="h-12 px-6 btn-primary" disabled={isSubscribing}>
                      {isSubscribing ? "..." : <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                  onClick={handleFollowShop}
                >
                  Follow on Shop
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
