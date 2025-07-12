'use client'

import React from 'react'
import Button from '../uiComponents/Button'
// import useCart from '@/hooks/useCart'
import { useCartContext } from '@/context/CartContext'

const CartSummary = () => {
  const { cart } = useCartContext()
  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
  const estimatedTax = subtotal * 0.05 // exemple : 5% TVA
  const total = subtotal + estimatedTax

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Résumé de la commande</h2>

      <div className='flex justify-between mb-2'>
        <span>Articles :</span>
        <span>{cart.length}</span>
      </div>

      <div className="flex justify-between text-gray-700">
        <p>Sous-total</p>
        <p>{ subtotal.toFixed(2)} $</p>
      </div>

      <div className="flex justify-between text-gray-700">
        <p>Tax extimée</p>
        <p>{estimatedTax.toFixed(2)} $</p>
      </div>

      <hr className='my-4 border-gray-300' />

      <div className='flex justify-between font-semibold text-lg text-gray-900'>
        <p> Total</p>
        <p>{total.toFixed(2)} $ </p>
      </div>

      <Button className='className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"' >
      Passer la commande
      </Button>

    </div>
  )
}

export default CartSummary
