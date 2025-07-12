// import { useState, useEffect } from 'react'

// // Définis le type d’un produit dans le panier
// export interface CartItem {
//     id: number
//     title: string
//     price: string
//     image: string
//     quantity: number
//   }

// export const useCart = () => {
//     const [cart, setCart] = useState<CartItem[]>([])

//       // Récupère les données du panier depuis localStorage au montage
//     useEffect(() => {
//         const storedCart = localStorage.getItem('cart')
//         if (storedCart) {
//             setCart(JSON.parse(storedCart))
//         }
//     }, [])

//     // Sauvegarde le panier dans localStorage à chaque mise à jour
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart))
//     }, [cart])

//     // Ajoute un produit au panier
//     const addToCart= (product: CartItem) => {
//         const existing = cart.find(item => item.id === product.id)
//         if (existing) {
//             setCart(
//                 cart.map(item => 
//                     item.id === product.id 
//                         ? {...item, quantity: item.quantity+1}
//                         : item
//                 )
                
//             )
//         } else {
//             setCart([...cart, {...product, quantity: 1}])
//         }
//     }

//     // Supprime un article
//     const removeFromCart = (id: number) => {
//         setCart(cart.filter(item => item.id != id))
//     }
//     // Change la quantité manuellement

//     const updateQuantity = (id: number, quantity: number) => {
//         if (quantity <= 0) {
//             removeFromCart(id)
//         } else {
//             setCart(
//                 cart.map(
//                     item => 
//                     item.id === id ? {... item, quantity } : item
//                 )
//             )
//         }
//     }
//   return {cart, addToCart, removeFromCart, updateQuantity,}
// }

// export default useCart

import { useCartContext } from '@/context/CartContext'
export const useCart = useCartContext
export default useCart
