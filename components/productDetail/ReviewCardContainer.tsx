import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewCardContainer = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h4 className='text-xl font-semibold text-gray-800 mb-6'> 
        Avis des clients <span className="text-gray-500">(3)</span></h4>
        
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    </section>
  )
}

export default ReviewCardContainer
