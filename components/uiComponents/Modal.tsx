import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Button from './Button'


interface Props {
    children: React.ReactNode
    buttonText?: string
    title?: string
  }

const Modal = ({children, buttonText = 'Ajouter un avis', title=''}: Props) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className='default-btn my-6 text-sm px-6 py-2 max-sm:text-xs max-sm:px-4'> {buttonText} </Button>
        </DialogTrigger>

        <DialogContent className="max-w-md w-full rounded-xl p-6">
            {title && (
                <DialogHeader>
                    <DialogTitle className='text-lg font-semibold text-gray-800 mb-4'>{title}</DialogTitle>
                </DialogHeader>
            )}
            {children}
            </DialogContent>
        </Dialog>
  )
}

export default Modal
