import ProductsSection from '@/components/home/ProductsSection'
import ProductInfo from '@/components/productDetail/ProductInfo'
import RatingProgressBar from '@/components/productDetail/RatingProgressBar'
import ReviewCardContainer from '@/components/productDetail/ReviewCardContainer'
import ReviewForm from '@/components/productDetail/ReviewForm'
import Modal from '@/components/uiComponents/Modal'
import { Star } from 'lucide-react'
import React from 'react'

const ProductPage = () => {
  return (
    <>
    {/* Détails du produit */}
      <ProductInfo />

        {/* Avis des clients */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h3 className='text-2xl font-semibold text-center text-gray-800 mb-10'> Avis des clients</h3>

        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>

            {/* Note moyenne */}
            <div className='bg-gray-100 rounded-xl px-6 py-8 w-full max-w-sm mx-auto lg:mx-0 text-center shadow-sm'>
                <h1 className='text-5xl font-bold text-gray-900 mb-2'>5.0</h1>
                <small className='text-gray-600 text-sm mb-4'>sur 10 avis</small>

                <div className='flex justify-center gap-1 text-black'>
                    <Star className='fill-black w-5 h-5 cursor-pointer'/>
                    <Star className='fill-black w-5 h-5 cursor-pointer'/>
                    <Star className='fill-black w-5 h-5 cursor-pointer'/>
                    <Star className='fill-black w-5 h-5 cursor-pointer'/>
                    <Star className='fill-black w-5 h-5 cursor-pointer'/>
                </div>
                {/* <div className="flex justify-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current w-5 h-5" />
              ))}
            </div> */}
            </div>

            {/* Barres de progression */}
            <div className='flex-1 space-y-4 w-full max-w-xl mx-auto'>
                <RatingProgressBar rating="Excellent" numRating={8} />
                <RatingProgressBar rating=" Very good" numRating={7} />
                <RatingProgressBar rating=" Good" numRating={6} />
                <RatingProgressBar rating=" Fair" numRating={5} />
                <RatingProgressBar rating=" Poor" numRating={3} />
            </div>
        </div>
        
        {/* Bouton d'ajout d'avis */}
        <div className='mt-12 flex justify-center'>
            <Modal >
                <ReviewForm />
            </Modal>
        </div>
      </section>

    {/* Liste des avis */}
      <ReviewCardContainer />
        
        {/* Produits similaires */}
      <ProductsSection  title="Produits de la même catégorie"/>
    </>
  )
}

export default ProductPage
