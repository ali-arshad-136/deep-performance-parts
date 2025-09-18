"use client"

import type React from "react"

import { Header } from "@/components/header"
import { EmailSubscription } from "@/components/email-subscription"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("[v0] Contact form submitted:", formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    console.log("[v0] Contact form submission successful")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="bg-neutral-100 dark:bg-neutral-100 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-neutral-800 mb-12 text-center">Contact</h1>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="text-green-600 text-2xl font-semibold mb-4">✓ Message Sent Successfully!</div>
              <p className="text-neutral-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-white border-neutral-300 text-neutral-800 placeholder:text-neutral-500"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="bg-white border-neutral-300 text-neutral-800 placeholder:text-neutral-500"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="bg-white border-neutral-300 text-neutral-800 placeholder:text-neutral-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Textarea
                  name="comment"
                  placeholder="Comment"
                  rows={6}
                  className="bg-white border-neutral-300 text-neutral-800 placeholder:text-neutral-500 resize-none"
                  value={formData.comment}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-2 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>

      <EmailSubscription />
      <Footer />
    </div>
  )
}
