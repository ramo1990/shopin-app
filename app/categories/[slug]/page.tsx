import CategoryBtn from '@/components/category/CategoryBtn'
import ProductCard from '@/components/home/ProductCard'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

      {/* Titre de la catégorie */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
        Vêtements
      </h1>

        {/* Boutons de catégories */}
        <div className='flex flex-wrap justify-center gap-4 mb-10'>
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
        </div>

        {/* Liste des produits */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>

    </div>
  )
}

export default CategoryPage
