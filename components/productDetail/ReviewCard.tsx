import { PenIcon, Star, TrashIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
const ReviewCard = () => {
    const starArray = [1, 2, 3, 4, 5]

  return (
    <div className='w-full bg-white shadow-md hover:shadow-lg transition-shadow px-6 py-5 rounded-xl flex flex-col gap-5 border border-gray-100'>

        {/* Actions + Date */}
        <div className='flex justify-between items-center text-sm text-gray-500'>
            <div className='flex gap-2'>
                <button className='p-2 rounded-md hover:bg-gray-100 transition' aria-label="Supprimer l'avis" >
                    <TrashIcon className="w-5 h-5 text-gray-600" />
                </button>

                <button className='p-2 rounded-md hover:bg-gray-100 transition' aria-label="Modifier l'avis">
                <PenIcon className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="text-end">
                <p className="text-xs">Modifié</p>
                <p className="text-xs">il y a 1 mois</p>
            </div>
        </div>

         {/* User & Comment */}
        <div className='flex items-start gap-4'>
            <div className='w-12 h-12 relative rounded-full overflow-hidden border-2 border-gray-200'>
                <Image src='/casquette.jpeg' alt='User avatar' className="object-cover rounded-full" fill />
            </div>

            <div className='flex-1'>
                <p className='text-gray-800 font-semibold text-base'>John</p>

                <div className='flex gap-1 mt-1'>
                    {starArray.map((star) => (
                         <Star key={star}
                         className="w-4 h-4 fill-yellow-500 stroke-yellow-500" /> 
                    ))}
                </div>
                    
                    <p className='mt-3 text-sm text-gray-700 leading-relaxed'>
                    Super produit, je suis très satisfait de la qualité et du service !
                    </p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
