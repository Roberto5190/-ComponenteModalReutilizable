import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Modal = ({ isOpen, onClose, children }) => {

    const [show, setShow] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setShow(true)
        } else {
            // esperamos al fade-out despues del desmontaje del componente
            const timeout = setTimeout(() => setShow(false), 300)
            return () => clearTimeout(timeout)
        }
    }, [isOpen])

    // Agregar el efecto para cerrar con la tecla ESC
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose(); // Cerrar el modal
            }
        };

        // Solo escuchamos la tecla ESC cuando el modal está abierto
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        // Limpiar el event listener cuando el modal se cierre
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!show) return null; // No se muestra el modal hasta que se cierre

    return (
        <div
            role="dialog"
            aria-modal="true"
            className={`overlay fixed flex justify-center items-center inset-0 z-50 bg-black/50 
                
                ${isOpen ? 'fade-in' : 'fade-out'}
                `}
            onClick={onClose}

        >
            <div
                className={`content relative flex-col justify-center items-center w-[500px] bg-white rounded-3xl px-8 py-4
                    
                    ${isOpen ? 'fade-in' : 'fade-out'}
                    `}
                onClick={e => e.stopPropagation()}
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
