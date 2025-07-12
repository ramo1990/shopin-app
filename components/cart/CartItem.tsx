"use client"

import React from 'react'
import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import Button from '../uiComponents/Button'
import { useCartContext } from '@/context/CartContext'
import { CartItem } from '@/context/CartContext'

interface Props {
  item: CartItem
}

const CartItem = ({item}: Props) => {
  const {removeFromCart, updateQuantity } = useCartContext()

  const totalItemPrice = parseFloat(item.price) * item.quantity

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 py-6'>

        {/* Image produit */}
      <div className="relative w-20 h-20 rounded overflow-hidden">
        <Image src={item.image} alt={item.title} className='object-cover' fill />
      </div>

      {/* Détails du produit */}
      <div className="flex-1 min-w-[120px] space-y-1">
        <h2 className="font-medium text-gray-800">{item.title}</h2>
        <p className="text-gray-500">Prix: {item.price} $</p>
      </div>

      {/* Sélecteur de quantité */}
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200">
            <Minus size={16} />
        </button>
        <span className="text-sm font-medium text-gray-700">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200">
            <Plus size={16} />
        </button>
      </div>      
      {/* Supprimer */}
      <button onClick={() => removeFromCart(item.id)} className='text-sm text-red-500 mt-2 hover:underline'>
          Supprimer
      </button>

    {/* Prix total de cet article */}
      <p className="w-16 text-right font-semibold text-gray-800">{totalItemPrice.toFixed(2)} $</p>

      {/* Boutons actions */}
      <div className="flex items-center gap-3">
        <button className="text-red-500 hover:text-red-600" aria-label="Supprimer l'article">
            <X />
        </button>
      {/* Update cart Button */}
      {/* <Button className='className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition text-sm"'>
        Mettre à jour
      </Button> */}
      </div>

    </div>
  )
}

export default CartItem
