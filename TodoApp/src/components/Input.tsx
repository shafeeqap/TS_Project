import React from 'react'
import { ReactSetState } from '../types/utils';

type InputType<T> = {
    type: "text" | "checkbox" | "color";
    inputValue: T;
    setInputValue: ReactSetState<T>
    className: string
}


const Input = <T extends string | boolean>({ type, inputValue, setInputValue, className }: InputType<T>) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = type === 'checkbox' ? event.target.checked : event.target.value;
        setInputValue(value as T)
    }
    return (
        <input
            onChange={handleChange}
            type={type}
            value={type === "checkbox" ? undefined : (inputValue as string)} 
            checked={type === "checkbox" ? (inputValue as boolean) : undefined} 
            placeholder={type === "text" ? 'Write your todo list here' : undefined}
            className={className}
        />
    )
}

export default Input