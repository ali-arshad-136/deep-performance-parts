export interface CartItem {
  id: string
  name: string
  price: string
  image: string
  quantity: number
}

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return []
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

export const addToCart = (product: Omit<CartItem, "quantity">): void => {
  const cart = getCart()
  const existingItem = cart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent("cartUpdated"))
}

export const removeFromCart = (productId: string): void => {
  const cart = getCart().filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent("cartUpdated"))
}

export const updateQuantity = (productId: string, quantity: number): void => {
  const cart = getCart()
  const item = cart.find((item) => item.id === productId)

  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      localStorage.setItem("cart", JSON.stringify(cart))
      window.dispatchEvent(new CustomEvent("cartUpdated"))
    }
  }
}

export const getCartTotal = (): number => {
  return getCart().reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace("£", ""))
    return total + price * item.quantity
  }, 0)
}

export const getCartItemCount = (): number => {
  return getCart().reduce((total, item) => total + item.quantity, 0)
}

export const clearCart = (): void => {
  localStorage.removeItem("cart")
  window.dispatchEvent(new CustomEvent("cartUpdated"))
}
