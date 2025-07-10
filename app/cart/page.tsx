import Link from 'next/link'
import React from 'react'

const CartPage = () => {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gray-50 px-4">

        <div className="max-w-xl text-center space-y-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800"> 
                Votre panier est vide</h1>
                <p className="text-gray-600">Vous n’avez ajouté aucun article pour le moment.</p>

                <Link href='/' className='inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition'>
                    Retour à l’accueil
                </Link>
            </div>
    </section>
  )
}

export default CartPage
