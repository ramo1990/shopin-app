import React from 'react'
import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import Button from '../uiComponents/Button'


const CartItem = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 py-6'>

        {/* Image produit */}
      <div className="relative w-20 h-20 rounded overflow-hidden">
        <Image src="/casquette.jpeg" alt='Casquette' className='object-cover' fill />
      </div>

      {/* Détails du produit */}
      <div className="flex-1 min-w-[120px] space-y-1">
        <p className="font-medium text-gray-800">Casquette</p>
        <p className="text-gray-500">$200</p>
      </div>

      {/* Sélecteur de quantité */}
      <div className="flex items-center gap-2">
        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
            <Minus size={16} />
        </button>
        <span className="text-sm font-medium text-gray-700">5</span>
        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
            <Plus size={16} />
        </button>
      </div>      
    
    {/* Prix total */}
      <p className="w-16 text-right font-semibold text-gray-800">${100}</p>

      {/* Boutons actions */}
      <div className="flex items-center gap-3">
        <button className="text-red-500 hover:text-red-600" aria-label="Supprimer l'article">
            <X />
        </button>
      {/* Update cart Button */}
      <Button className='className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition text-sm"'>
        Mettre à jour
      </Button>

      </div>
    </div>
  )
}

export default CartItem
