import React from 'react'

type ButtonType = {
    children: JSX.Element | string;
    className?: string;
    onClick?: () => void;
}


const Button = ({ children, className, onClick }: ButtonType) => {
    return (
        <button type='submit' className={className} onClick={onClick}>{children}</button>
    )
}

export default Button