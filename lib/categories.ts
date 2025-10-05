export interface Category {
  id: string
  name: string
  description: string
  icon: string
  imageUrl: string
}

export const categories: Category[] = [
  {
    id: "lights",
    name: "Lights",
    description: "Headlights, taillights, DRL modules, and LED upgrades",
    icon: "Lightbulb",
    imageUrl: "/bmw-headlight-with-yellow-drl-modules-close-up.jpg"
  },
  {
    id: "steering-wheels",
    name: "Steering Wheels",
    description: "Performance steering wheels and carbon fiber upgrades",
    icon: "Wheel",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "exhaust-systems",
    name: "Exhaust Systems",
    description: "Performance exhaust systems and sound upgrades",
    icon: "Zap",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "suspension",
    name: "Suspension",
    description: "Coilovers, springs, and handling upgrades",
    icon: "Settings",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "body-kits",
    name: "Body Kits",
    description: "Aerodynamic body kits and carbon fiber parts",
    icon: "Car",
    imageUrl: "/bmw-3-series-car-side-view-dark-background.jpg"
  },
  {
    id: "wheels-tires",
    name: "Wheels & Tires",
    description: "Performance wheels and high-performance tires",
    icon: "Circle",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "interior",
    name: "Interior",
    description: "Carbon fiber trim, seats, and interior upgrades",
    icon: "Car",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "engine-performance",
    name: "Engine Performance",
    description: "ECU tuning, air intakes, and performance chips",
    icon: "Cpu",
    imageUrl: "/placeholder.svg"
  }
]

export interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  onSale?: boolean
  category: string
  description?: string
  featured?: boolean
}