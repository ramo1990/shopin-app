import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import React from 'react'

const CartitemPage = () => {

  // nombre d'articles
    // const CartitemPage_count = 3

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-10 text-center lg:text-left'>Mon Panier</h1>

        <div className='flex flex-col lg:flex-row gap-10'>
            {/* Liste des articles */}
            <div className='flex-1'>
                <div className='max-h-[500px] overflow-y-auto space-y-6 pr-2 custom-scrollbar'>
                    {/* {CartitemPage_count > 0 ? <CartItem /> : <p className='text-center text-gray-500 py-10'>Your cart is empty</p>} */}
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>

            {/* Résumé du panier */}
            <aside className='w-full lg:w-[350px] bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm'>
                <CartSummary />
            </aside>

        </div>
    </div>
  )
}

export default CartitemPage
