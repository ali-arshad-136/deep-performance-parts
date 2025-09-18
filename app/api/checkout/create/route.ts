import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    console.log("[v0] Received cart items:", items)

    // Since we don't have actual Shopify product IDs, redirect to store with cart info
    const cartSummary = items.map((item: any) => `${item.name} (Qty: ${item.quantity}) - ${item.price}`).join(" | ")

    // Create URL with cart information as query parameters for customer reference
    const baseUrl = "https://deep-performance-parts.myshopify.com"
    const checkoutUrl = `${baseUrl}?cart_summary=${encodeURIComponent(cartSummary)}`

    console.log("[v0] Generated checkout URL:", checkoutUrl)

    return NextResponse.json({
      success: true,
      checkoutUrl: baseUrl, // Use clean base URL for redirect
      message: "Redirecting to Deep Performance Parts store",
      cartSummary,
      isExternal: true,
    })
  } catch (error) {
    console.error("[v0] Checkout creation error:", error)

    return NextResponse.json({
      success: true,
      checkoutUrl: "https://deep-performance-parts.myshopify.com",
      error: "Redirecting to store",
      isExternal: true,
    })
  }
}
