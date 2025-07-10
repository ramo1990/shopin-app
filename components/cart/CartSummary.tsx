import React from 'react'
import Button from '../uiComponents/Button'

const CartSummary = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Résumé de la commande</h2>

      <div className="flex justify-between text-gray-700">
        <p>Sous-total</p>
        <p>$100</p>
      </div>

      <div className="flex justify-between text-gray-700">
        <p>Tax extimée</p>
        <p>$5</p>
      </div>

      <hr className='my-4 border-gray-300' />

      <div className='flex justify-between font-semibold text-lg text-gray-900'>
        <p> Total</p>
        <p>$120 </p>
      </div>

      <Button className='className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"' >
        Proceed to checkout
      </Button>

    </div>
  )
}

export default CartSummary
