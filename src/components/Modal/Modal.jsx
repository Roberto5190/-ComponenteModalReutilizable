import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Modal = ({ isOpen, onClose, children }) => {




    if (!isOpen) return null; // No se muestra el modal hasta que se cierre

    return (
        <div
            role="dialog"
            aria-modal="true"
            className={`overlay fixed flex justify-center items-center inset-0 z-50 bg-black/50 
                ${isOpen ? 'fade-in' : 'fade-out'}
                `}
        >
            <div
                className={`content relative flex-col justify-center items-center w-[500px] bg-white rounded-3xl px-8 py-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'scale-100' : 'scale-95'
                    }`}
            >
                <div className="content_top w-full flex justify-between items-center ">
                    <div className="content_top_left">
                        <div className="content_top_left_text font-bold">
                            <h4>Ventana Modal</h4>
                        </div>
                    </div>
                    <div className="content_top_right flex cursor-pointer" onClick={onClose}>
                        <Icon icon="ic:baseline-close" />
                    </div>
                </div>
                <div className="mt-4 mb-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
