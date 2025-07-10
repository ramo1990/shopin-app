import MiniProductCard from '@/components/order/MiniProductCard'
import PurchasedOrder from '@/components/order/PurchasedOrder'
import React from 'react'

const ProfilePage = () => {
  return (
    <>
      <PurchasedOrder />

      <section className='main-max-width padding-x mx-auto my-10'>
        <h2 className='text-center text-2xl font-bold text-gray-800 mt-2 mb-6 sm:text-2xl'>Produits ajoutés à la liste de souhaits</h2>

        {/* content */}
        <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 px-4 py-6 w-full border border-gray-200 bg-white rounded-lg shadow-sm'>
            <MiniProductCard />
            <MiniProductCard />
            <MiniProductCard />
        </div>
      </section>
    </>
  )
}

export default ProfilePage
