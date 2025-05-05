// src/components/Formulario/Formulario.jsx
import React, { useState } from 'react'

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!nombre || !email) {
            alert("Por favor, complete todos los campos.")
            return
        }

        onSubmit({ nombre, email })
        setNombre('')
        setEmail('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className="border p-2 rounded"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Enviar
            </button>
        </form>
    )
}

export default Formulario
