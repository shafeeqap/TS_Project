import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import { type Items } from '../types/utils';
import ItemList from './ItemList';
import { toast } from "react-toastify"


const TodoList: React.FC = () => {
    const [items, setItems] = useState<Items[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!inputValue.trim()) {
            toast.warning('Please enter a valid task!')
            return;
        }

        setItems((prev) => [...prev, { title: inputValue, id: Date.now().toString(), isCompleted: false }]);
        setInputValue("")
    }


    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-white'>
            <div className='text-black max-md:w-3/4 w-1/2'>
                <div className='bg-gradient-to-r from-blue-500 to-blue-800 w-full text-center p-5 rounded-t-md'>
                    <h1 className='text-2xl font-bold text-white uppercase'>Todo List</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-center gap-5 py-5'>
                            <Input
                                type='text'
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                className='p-2 w-full rounded-md'
                            />
                            <Button className='bg-white w-24 rounded-md' >Add</Button>
                        </div>
                    </form>
                </div>
                <div className='text-center py-2 bg-white rounded-md drop-shadow-md pb-5'>
                    <h1 className='uppercase text-black font-bold mb-5'>List of works todo:</h1>
                    <div className='w-full h-52 overflow-auto overflow-y-scroll px-5'>
                        <ItemList items={items} setItems={setItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList