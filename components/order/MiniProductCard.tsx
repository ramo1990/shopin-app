import React from 'react'
import Image from "next/image"

const MiniProductCard = () => {
  return (
    <div className='w-[180px] sm:w-[200px] rounded-xl shadow-sm hover:shadow-md bg-white flex flex-col items-center 
                gap-3 p-4 transition duration-200 ease-in-out border border-gray-100 hover:border-gray-300'>

        {/* Image produit */}
        <div className='w-full aspect-square rounded-lg overflow-hidden'>
            <Image src="/casquette.jpeg" alt='casquette' 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' width={200} height={200} />
        </div>

        {/* Nom du produit */}
        <p className='text-center text-sm sm:text-base font-semibold text-gray-800'>casquette</p>

       {/* Prix */}
        <p className='text-sm sm:text-[16px] text-center font-bold text-black'>$200</p>
        
    </div>
  )
}

export default MiniProductCard
