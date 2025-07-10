"use client"

import React, { useState } from 'react'
import Link from "next/link"
import SearchForm from './SearchForm'
import NavItems from './NavItems'
import MobileNavbar from './MobileNavbar'
import SearchButton from './SearchButton'
// import { FaHeartPulse } from 'react-icons/fa6'

interface LoggedInUser{
        name: string;
        email: string;
        image: string;
    }

interface Props {
    LoggedInUser: LoggedInUser | null;
  }

const NavBar = ({LoggedInUser}: Props) => {

    const [showSearchForm, setShowSearchForm] = useState(false)

    const handleSearch = () => setShowSearchForm(prev => !prev)

  return (
    <>
    <nav className='bg-[whitesmoke] sticky top-0 z-20 w-full py-3 border-b border-gray-300 shadow-sm'>
        <div className='w-full max-w-7xl mx-auto flex justify-between items-center padding-x px-4 md:px-6 lg:px-8'>

        {/* Logo */}
        <Link href="/">
            <h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'> 
            Shopin </h1>
        </Link>

        
        {/* Desktop Search */}
        <div className='hidden lg:flex justify-center flex-1 mx-4'>
            <div className='mx-auto max-w-md'>
                <SearchForm />
            </div>
        </div>

        {/* Mobile Search Button */}
        <div className='block lg:hidden'>
        <SearchButton handleSearch={handleSearch} showSearchForm={showSearchForm} />
        </div>
        
        {/* Mobile Navbar (hamburger) */}
        <div className='block md:hidden'>
            <MobileNavbar />
        </div>

        {/* Desktop NavItems */}
        <div className='hidden md:flex items-center gap-4'>
            <NavItems LoggedInUser={LoggedInUser}/>
        </div>

        </div>
    </nav>

    {/* Mobile Search Form */}
    { showSearchForm && (
        <div className='block md:block lg:hidden mt-2 px-4'>
            <div className='flex justify-center'>
                <div className='w-full max-w-md'>
                    <SearchForm />
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default NavBar
