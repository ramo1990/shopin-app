'use client'

import useWishlist from '@/hooks/useWishlist'
import Image from 'next/image'
import Link from 'next/link'

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ma Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Aucun produit dans la wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="border p-4 rounded shadow">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-green-600">{item.price} €</p>
              <button
                className="mt-2 text-sm text-red-500"
                onClick={() => removeFromWishlist(item.id)}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WishlistPage
