import React from 'react'

interface Props{
    className: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void; 
}

const Button = ({className, children, type = "button", onClick }: Props) => {
  return (
   <button className={className} type={type} onClick={onClick}>
    {children}
    </button>
  )
}

export default Button
