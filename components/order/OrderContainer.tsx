import React from 'react'
import IndividualOrder from './IndividualOrder'

const OrderContainer = () => {
  return (
    <div className='w-full max-h-[500px] overflow-y-auto space-y-6 p-4 sm:p-6 rounded-lg bg-gray-50'>
        <IndividualOrder />
        <IndividualOrder />
        <IndividualOrder />
    </div>
  )
}

export default OrderContainer
