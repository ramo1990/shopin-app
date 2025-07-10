import React from 'react'
import Image from "next/image"
import { signIn } from "@/auth"

const SignInPage = () => {
  return (
    <div className='bg-gray-50 flex items-center justify-center min-h-screen px-4'>

      <div className='bg-white shadow-xl rounded-2xl p-6 sm:p-10 max-w-sm w-full flex flex-col gap-6'>
        <h2 className='text-3xl font-semibold text-center text-gray-900'>Bienvenue</h2>
        <p className="text-center text-gray-600 text-sm">Connecte-toi pour accéder à ton compte</p>

        <form action={async () => {
            "use server"
            await signIn("google", {redirectTo: "/"})
        }}>
            <button type='submit' className='w-full flex items-center cursor-pointer justify-center border border-gray-300'>
                <Image  src="/casquette.jpeg" 
                        alt="google Icon" width={20} height={20} className='mr-3'/> 
                <span className="text-sm font-medium text-gray-700">Continuer avec Google</span>
            </button>
        </form>
      </div>

    </div>
  )
}

export default SignInPage
