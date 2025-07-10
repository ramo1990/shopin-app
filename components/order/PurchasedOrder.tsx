import React from 'react'
import OrderContainer from './OrderContainer'

const PurchasedOrder = () => {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-10'>
      <div className='main-max-width mx-auto padding-x'>

        {/* Titre */}
        <h2 className='font-semibold text-2xl max-sm:text-[16px] text-gray-800 my-6 text-center'>Commandes passées </h2>
        
        {/* Contenu des commandes */}
        {/* <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6"> */}
          <OrderContainer />
        {/* </div> */}
        
      </div>
    </section>
  )
}

export default PurchasedOrder