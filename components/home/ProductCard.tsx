import React from 'react'
import Image from "next/image"

const ProductCard = () => {
  return (
    <div className='w-[260px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white 
              flex flex-col items-center px-5 py-6 hover:scale-[1.02] hover:border hover:border-gray-200'>
        <div className='w-[200px] h-[200px] rounded-md overflow-hidden'>
            <Image src="/casquette.jpeg" className='object-cover w-full h-full transition-transform duration-300 hover:scale-105' 
            alt="casquette" width={200} height={200} />
        </div>
      
        {/* Product Name */}
        <p className='text-center text-lg font-semibold mt-4 text-gray-800'>Vêtements</p>

        {/* Product Price */}
        <p className='text-xl text-center font-bold text-black mt-2'> $200.00</p>

        {/* Buy now button */}
        {/* <button className='mt-4 bg-black text-white w-full py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200'>
            Buy Now
        </button> */}
    </div>
  );
};

export default ProductCard
