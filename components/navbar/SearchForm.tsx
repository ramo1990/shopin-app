import React from 'react'
import { Search } from 'lucide-react'

const SearchForm = () => {
  return (
    <form action="/" role="search" className="relative w-full max-w-md">

      <input
      type='text'
      placeholder="Recherche"
        name="query"
        className="w-full
        py-2
        pl-4
        pr-10
        rounded-full
        border
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-transparent
        bg-white
        text-gray-900
        placeholder-gray-400
        transition
        duration-200"
        aria-label="Search"
      />
      <button type= "submit" aria-label="Submit search" 
        className="absolute
        right-2
        top-1/2
        -translate-y-1/2
        text-gray-500
        hover:text-blue-600
        focus:outline-none">
            {/* 🔍 */}
        <Search className="w-4 h-4" />
      </button>
    </form>
  )
}

export default SearchForm
