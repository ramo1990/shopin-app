import React from 'react'
import Image from "next/image"

const CategoryCard = () => {
  return (
    <div className='w-[200px] h-[160px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
            flex flex-col items-center justify-center cursor-pointer hover:scale-105'>

        {/* Category Icon */}
        <div className="w-14 h-14 relative">
            <Image src="/casquette.jpeg" alt="casquette" fill className='object-cover rounded-full' />
        </div>
      
        {/* Category Name */}
        <p className='font-semibold mt-3 text-gray-800 text-center'> Electronique</p>
    </div>
  )
}

export default CategoryCard
