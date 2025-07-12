'use client'

import { useEffect, useState } from 'react'

export interface WishlistItem {
  id: number
  title: string
  price: string
  image: string
}

const useWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('wishlist')
    if (stored) {
      setWishlist(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product: WishlistItem) => {
    const exists = wishlist.some(item => item.id === product.id)
    if (!exists) {
      setWishlist([...wishlist, product])
    }
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  const isInWishlist = (id: number) => {
    return wishlist.some(item => item.id === id)
  }

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist }
}

export default useWishlist
