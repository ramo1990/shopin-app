import React from 'react'

interface Props{
    className: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

const Button = ({className, children, type = "button"}: Props) => {
  return (
   <button className={className} type={type}>
    {children}
    </button>
  )
}

export default Button
