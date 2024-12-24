import React from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from "react-icons/md";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: JSX.Element | string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div onClick={onClose} className="flex justify-end">
                        <div className="rounded-full hover:bg-slate-200 p-1">
                            <MdClose className="text-black text-2xl cursor-pointer" />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mr-4 sm:mt-0 sm:text-left py-2 w-full">
                            <h1
                                className="text-xl font-bold leading-6 text-gray-900"
                                id="modal-title"
                            >
                                {title}
                            </h1>
                            <div className="mt-4">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
