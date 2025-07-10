import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-black text-white w-full py-16'>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-20">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* logo  et description */}
            <div>
                <h1 className='text-3xl font-bold text-white mb-4 pl-2'> Shopin</h1>
                <p className='text-sm text-gray-400 leading-relaxed'>
                    Shopin est une boutique moderne de vente en ligne où vous pouvez acheter
                        et naviguer en toute sécurité.
                </p>
            </div>

            {/* Quick links */}
            <div>
                <h2 className='text-lg font-semibold mb-4'> Liens rapides</h2>
                <ul className='text-gray-400 space-y-3 text-sm'>
                    <li className='hover:text-white transition'>Accueil</li>
                    <li className='hover:text-white transition'>Casquettes</li>
                    <li className='hover:text-white transition'> Vêtements</li>
                    <li className='hover:text-white transition'> Meilleures ventes</li>
                    <li className='hover:text-white transition'> Nous contacter</li>
                </ul>
            </div>

            {/* Support client */}
            <div>
                <h2 className='text-lg font-semibold mb-4'>Support client</h2>
                <ul className='text-gray-400 space-y-3 text-sm'>
                    <li className='hover:text-white transition'>À propos de Shopin</li>
                    <li className='hover:text-white transition'> Retour & Remboursements</li>
                    <li className='hover:text-white transition'>Confidentialité</li>
                    <li className='hover:text-white transition'> FAQ</li>
                    <li className='hover:text-white transition'>Suivi de commande</li>
                    <li className='hover:text-white transition'>Contact support</li>
                </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className='flex flex-col items-start gap-4'>
                <h2 className="text-lg font-semibold mb-2">Suivez-nous</h2>
                <div className='flex gap-4'>
                    <FaLinkedin className='text-2xl text-gray-400 hover:text-white transition cursor-pointer' />
                    <FaFacebook className='text-2xl text-gray-400 hover:text-white transition cursor-pointer' />
                    <FaInstagram className='text-2xl text-gray-400 hover:text-white transition cursor-pointer' />
                    <BsTwitter className='text-2xl text-gray-400 hover:text-white transition cursor-pointer' />
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 mt-12 pt-6 text-center'>
            <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Shopin. Tous droits reservés. </p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
