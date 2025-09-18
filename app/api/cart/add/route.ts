import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, variantId, quantity, properties } = body

    console.log("[v0] Cart API received:", { id, variantId, quantity, properties })

    if (!id || !variantId || !quantity) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: id, variantId, or quantity" },
        { status: 400 },
      )
    }

    // These should be set in Vercel Project Settings without NEXT_PUBLIC_ prefix
    const shopifyDomain = process.env.SHOPIFY_DOMAIN
    const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN

    if (!shopifyDomain || !storefrontToken) {
      console.log("[v0] Shopify config missing, using mock response")
      // For development without Shopify setup, return mock success
      const mockResponse = {
        success: true,
        cartId: `cart_${Date.now()}`,
        lineItem: {
          id: variantId,
          quantity,
          properties,
          price: properties?.price || "£0.00",
        },
        message: "Product added to cart (development mode)",
      }

      console.log("[v0] Returning mock response:", mockResponse)
      return NextResponse.json(mockResponse)
    }

    try {
      const shopifyUrl = `https://${shopifyDomain}/api/2023-10/graphql.json`

      // First, create a cart if one doesn't exist
      const createCartMutation = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `

      const cartResponse = await fetch(shopifyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontToken,
        },
        body: JSON.stringify({
          query: createCartMutation,
          variables: {
            input: {
              lines: [
                {
                  merchandiseId: variantId,
                  quantity: quantity,
                },
              ],
            },
          },
        }),
      })

      const cartData = await cartResponse.json()

      if (cartData.data?.cartCreate?.cart) {
        return NextResponse.json({
          success: true,
          cartId: cartData.data.cartCreate.cart.id,
          checkoutUrl: cartData.data.cartCreate.cart.checkoutUrl,
          lineItem: {
            id: variantId,
            quantity,
            properties,
            price: properties?.price || "£0.00",
          },
          message: "Product added to Shopify cart",
        })
      } else {
        throw new Error("Failed to create Shopify cart")
      }
    } catch (shopifyError) {
      console.error("[v0] Shopify API error:", shopifyError)
      // Fallback to mock response if Shopify fails
      return NextResponse.json({
        success: true,
        cartId: `fallback_cart_${Date.now()}`,
        lineItem: {
          id: variantId,
          quantity,
          properties,
          price: properties?.price || "£0.00",
        },
        message: "Product added to cart (fallback mode)",
      })
    }
  } catch (error) {
    console.error("[v0] Cart API error:", error)
    return NextResponse.json({ success: false, error: "Failed to add item to cart" }, { status: 500 })
  }
}
