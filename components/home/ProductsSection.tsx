import React from 'react'
import CategoryCard from './CategoryCard'
import ProductCard from './ProductCard'


interface Props{
  title: string
}

const ProductsSection = ({title}: Props) => {
  return (
    <section className='w-full bg-white py-24 px-4 md:px-8 lg:px-16'>
      <div className="max-w-7xl mx-auto">
        {/* titre */}
        <h2 className='text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12'>
            {title}
        </h2>

        {/* Contenu */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection