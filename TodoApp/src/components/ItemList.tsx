import React, { useState } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import Button from './Button';
import { Items, ReactSetState } from '../types/utils';
import { toast } from "react-toastify"
import Modal from './Modal';
import Input from './Input';


type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>
}


const ItemList = ({ items, setItems }: ItemList) => {
    const [newItem, setNewItem] = useState<string>('')
    const [editItem, setEditItem] = useState<string | null>(null)
    const [modalState, setModalState] = useState<{ isOpen: boolean; itemId: string | null }>({ isOpen: false, itemId: null })


    const openModal = (id: string, currentText: string) => {
        setNewItem(currentText)
        setEditItem(id)
        setModalState({ isOpen: true, itemId: id })
    }

    const closeModal = () => {
        setModalState({ isOpen: false, itemId: null })
        setNewItem('')
        setEditItem(null)
    }

    const handleEdit = () => {
        if (editItem) {
            setItems((prev) => prev.map((data) =>
                data.id === editItem ? { ...data, title: newItem } : data))
            toast.success("Your task has been updated.");
            closeModal()
        }
    }

    const handleDelete = (id: string) => {
        setItems((prev) => prev.filter((data) => data.id !== id))
        toast.error('Your task is deleted from the list.');
    }

    const handleComplete = (id: string) => {
        setItems((prev) =>
            prev.map((data) =>
                data.id === id ? { ...data, isCompleted: !data.isCompleted } : data));
        toast.info('Task completion status toggled.');

    }

    return (
        <>
            {items.map((data) => (
                <div
                    key={data.id}
                    className={`flex justify-between border border-slate-400 px-2 py-2 mt-5 rounded-md 
                    ${data.isCompleted ? `bg-green-100` : ``}`}>
                    <p className={data.isCompleted ? `line-through text-gray-500` : ``}>
                        {data.title}
                    </p>
                    <div className='flex justify-between gap-4'>
                        <Input
                            type='checkbox'
                            inputValue={data.isCompleted}
                            setInputValue={() => handleComplete(data.id)}
                            className='cursor-pointer'
                        />
                        <Button onClick={() => openModal(data.id, data.title)} className='text-green-700 text-xl'><MdEdit /></Button>
                        <Button onClick={() => handleDelete(data.id)} className='text-red-600 text-xl'><MdDelete /></Button>
                    </div>
                </div>
            ))}
            {modalState.isOpen && (
                <Modal
                    isOpen={modalState.isOpen}
                    onClose={closeModal}
                    title='Edit Task'
                >
                    <div className='p-4'>
                        <Input
                            type='text'
                            inputValue={newItem}
                            setInputValue={setNewItem}
                            className='border border-gray-300 rounded-md w-full p-2 mb-4'
                        />
                        <div className="flex justify-end gap-2">
                            <Button onClick={handleEdit} className='bg-green-500 text-white px-4 py-2 rounded-md'>Save</Button>
                            <Button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ItemList