import { Children, useState } from "react"
import Modal from "./components/Modal/Modal"
import Formulario from "./components/Formulario/Formulario"
import Simple from "./components/Simple/Simple"
import Img from "./components/Img/Img"




function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const onClose = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, 300)
    } else {
      setIsOpen(true)
    }
  }

  const openModal = (type) => {
    setModalType(type)
    setIsOpen(true)
  }

  return (

    <div className=" flex flex-col justify-between items-center">
      <header className="bg-black w-full flex justify-center py-4">
        <h1 className="text-white text-3xl">Ejercicio Ventana Modal</h1>
      </header>

      <main className="mt-4 flex justify-center items-center">
        <div className=" flex flex-col justify-center gap-4">
          <button onClick={() => openModal("simple")} className="bg-green-400 py-2 px-4 rounded-2xl">
            Abrir modal Simple
          </button>
          <button onClick={() => openModal("form")} className="bg-green-400 py-2 px-4 rounded-2xl">
            Abrir modal Formulario
          </button>

          <button onClick={() => openModal("Img")} className="bg-green-400 py-2 px-4 rounded-2xl">
            Abrir modal Img
          </button>
        </div>



        <Modal isOpen={isOpen} onClose={onClose} setIsOpen={setIsOpen}>
          {modalType === "form" && (
            <Formulario />
          )}
          {modalType === "simple" && (
            <Simple onClose={onClose}/>
          )}
          {modalType === "Img" && (
            <Img />
          )}
        </Modal>

      </main>

    </div>
  )
}

export default App
