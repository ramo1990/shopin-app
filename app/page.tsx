import CategorySection from '@/components/home/CategorySection'
import Hero from '@/components/home/Hero'
import ProductsSection from '@/components/home/ProductsSection'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <div className='h-3' />
    <CategorySection />
    <div className='h-10' />
    <ProductsSection title="Featured Product"/>
    </>
  )
}

export default HomePage
