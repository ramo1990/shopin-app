import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from 'react-icons/fa6'
import {cn} from "@/lib/utils"
import Image from "next/image"
import { signOutUser } from '@/lib/actions'
import { useCartContext } from '@/context/CartContext'
import useWishlist from '@/hooks/useWishlist'


interface Props{
    mobile?: boolean
    onLinkClick?: () => void;
    LoggedInUser: {
      name: string;
        email: string;
        image: string;
    } | null;
}

const NavItems = ({mobile = false, onLinkClick, LoggedInUser }: Props) => {
    const handleClick = () => {
        if (onLinkClick) onLinkClick()
    };

    const handleLogout = async () => {
      await signOutUser(); // logout logique
    };

const { cart } = useCartContext()
const { wishlist } = useWishlist()

  return (
    <div className={cn(
        "flex items-center gap-3", mobile ? "flex-col" : "flex-row")}>
          
        {LoggedInUser ?(
        <>
        {/* Profile picture */}
      <div className="w-10 h-10 rounded-full overflow-hidden border-[2px] border-gray-400 shadow-sm bg-gray-100">
        <Image
      src={LoggedInUser.image || '/default-user.png'} // ou une valeur dynamique
      alt={`Photo de ${LoggedInUser.name}`}
      className="w-full h-full object-cover"
      width={40} height={40}
    />
      </div>

      {/* Username */}
      <Link
        href="/profile"
        className="text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200"
        onClick={handleClick}
      >
        {LoggedInUser.name}
      </Link>
      
      {/* Logout */}
      <button title="Se déconnecter" onClick={handleLogout} className="px-4 py-1 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-200">
          Logout
      </button >
      </>
        ) : (
      <Link href="/signin" 
            className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 
                    transition duration-200" onClick={handleClick}>
        Login
      </Link>
      )}

      {/* Panier */}
      <Link href="/cart" className="relative flex items-center justify-center w-[40px] h-[40px] cursor-pointer" aria-label="Shopping cart">
        <FaCartShopping className="cart-icon text-2xl text-black" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center leading-none shadow-sm">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </Link>

      <Link href="/wishlist"
      className="relative text-sm font-medium text-gray-700 hover:text-black transition">
        Wishlist
        {wishlist.length > 0 && (
          <span className="absolute -top-2 -right-2 text-[10px] bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center leading-none text-xs shadow-sm ml-1">
            {wishlist.length}
          </span>
        )}
        </Link>

    </div>
  )
}

export default NavItems
