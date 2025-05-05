import React from 'react'

const Simple = ({onClose}) => {
    return (
        <div className='flex flex-col justify-center gap-4 '>
            <h2 className='text-3xl font-bold'>Título</h2>
            <p className='text-[.75rem] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi quas voluptates nobis nisi dicta iusto reiciendis. Doloribus beatae quisquam, minima sit totam velit, illo saepe eum ullam magni rem?</p>
            <button className='bg-blue-400 px-4 py-2  rounded-2xl' onClick={onClose}>
                Aceptar
            </button>
        </div>
    )
}

export default Simple