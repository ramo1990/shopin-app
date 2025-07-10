import React from 'react'
import MiniProductCard from './MiniProductCard'

const IndividualOrder = () => {
  return (
    <div className='w-full border border-gray-200 bg-white p-4 rounded-xl shadow-md space-y-4'>

        {/* En-tête de la commande */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm'>
            <p className='text-sm sm:text-base font-medium text-gray-800'>
                ID de commande : <span className='text-green-600 font-semibold'>#PO-98324</span>
            </p>
            <span className="text-xs text-gray-500 mt-2 sm:mt-0">23 février 2025</span>
        </div>
      
      {/* Liste des produits */}
      <div className='flex flex-wrap gap-4'>
        <MiniProductCard />
        <MiniProductCard />
        <MiniProductCard />
        <MiniProductCard />
      </div>

    </div>
  )
}

export default IndividualOrder
