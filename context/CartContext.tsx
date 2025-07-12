'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'


export interface CartItem {
    id: number
    title: string
    price: string
    image: string
    quantity: number
  }
  
interface CartContextValue {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, qty: number) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id)
      if (exist) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const updateQuantity = (id: number, qty: number) => {
    setCart(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: qty } : p))
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCartContext must be used within CartProvider')
  return ctx
}
