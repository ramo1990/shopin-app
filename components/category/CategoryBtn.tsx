import React from 'react'
import Image from "next/image"

const CategoryBtn = () => {
  return (
    <button className="flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-200 shadow-sm bg-white
                 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black" aria-label="Catégorie : Vêtements">

        <div className="w-8 h-8 relative">
            <Image src='/casquette.jpeg' alt='Vêtements' className='object-contain rounded' fill sizes="32px" />
        </div>

      <span className="font-medium text-gray-800 text-sm sm:text-base">
        Vêtements
      </span>
    </button>
  )
}

export default CategoryBtn
