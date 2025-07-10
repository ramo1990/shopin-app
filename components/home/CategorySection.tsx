import React from 'react'
import CategoryCard from './CategoryCard'

const CategorySection = () => {
  return (
    <section className='w-full bg-gray-50 py-[120px] px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Titre */}
        <h2 className='text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 mt-12'>
        Catégories de Produits
        </h2>

        {/* Grille de cartes */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 place-items-center mt-8 mb-8'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
      </div>
    </section>
    
  )
}

export default CategorySection
