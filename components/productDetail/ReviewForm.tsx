"use client"

import { Star } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../uiComponents/Button'
import { Textarea } from '../ui/textarea'
import { cn } from '@/lib/utils'

interface Props{
    rating: number
    review: string
}

const ReviewForm = () => {

    const [hoverRating, setHoverRating] = useState(0)
    const [hoverReview, setHoverReview] = useState("")
    const [ClickedRating, setClickedRating] = useState(0)
    const [ClickedReview, setClickedReview] = useState("")
    const [reviewContent, setReviewContent] = useState("")

    const handleStarClick = ({rating, review}: Props) => {
        setClickedRating(rating)
        setClickedReview(review)
    };

    const handleHoverIn = ({rating, review}: Props) => {
        setHoverRating(rating)
        setHoverReview(review)
    };

    const handleHoverOut = () => {
        setHoverRating(0)
        setHoverReview("")
    };

    const ratings = [
        {rating: 1, review:"Mauvais"},
        {rating: 2, review:"Passable"},
        {rating: 3, review:"Bon"},
        {rating: 4, review:"Très bon"},
        {rating: 5, review:"Excellent"},
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // valider ici
        if (!ClickedRating || !reviewContent.trim()) {
            alert('Veuillez noter et ecrire un avis.')
            return
        }

        console.log({
            rating: ClickedRating,
            review: ClickedReview,
            content: reviewContent,
        })

        // Reset form
        setClickedRating(0)
        setClickedReview('')
        setReviewContent('')
        alert('Merci pour votre avis !')
    }

  return (
    <div className='w-full mx-auto bg-white rounded-xl p-6 shadow-lg'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4 text-center'>
        Donnez une note et un avis
        </h3>

        {/* Étoiles */}
        <div className='flex items-center justify-center gap-2 mb-2'>
            {ratings.map(({rating, review}) => (
            <Star key={rating} 
                onPointerEnter={() => handleHoverIn({rating, review})}
                onPointerLeave={handleHoverOut}
                onClick={() => handleStarClick({rating, review})}
                className={cn('w-7 h-7 cursor-pointer text-gray-400 hover:text-black transition', 
                        rating <= hoverRating || rating <= ClickedRating ? 'fill-black text-black' : '')}
                        aria-label={'Etoile ${rating}'} /> 
            ))}
        </div>

        <p className='text-center text-gray-600 text-sm mb-4'>{hoverReview ||ClickedReview || "Score de l’avis" }</p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <Textarea name="review" className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 rounded-lg p-3 min-h-[120px]'
                    placeholder="Écrivez votre avis ici" value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} required/>

            <Button type="submit" className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-900 transition">
                Envoyer
            </Button>

        </form>
    </div>
  )
}

export default ReviewForm
