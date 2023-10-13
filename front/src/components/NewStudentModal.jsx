'use client'

import { useState } from 'react'
import MyModal from './Modal'
import FormSubmitButton from './FormSubmitButton'
import { PlusCircle, Upload } from 'lucide-react'
import H2 from './H2'

export default function NewStudentModal() {
  // Modal control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      {/* New student button (tablets and PC's) */}
      <button
        onClick={handleOpen}
        className="flex gap-3 mt-5 absolute invisible md:static md:visible"
      >
        <PlusCircle color="#C6C6C6" />
        Adicionar aluno
      </button>

      {/* Modal */}
      <MyModal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
        <H2 title="Adicionar aluno" />

        <form action="" className="mt-8">
          <label htmlFor="name">Nome do aluno</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o nome do aluno"
            id="name"
          />

          <label htmlFor="email">Email</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o email institucional do aluno"
            id="email"
          />

          <label htmlFor="rm">RM</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o RM do aluno"
            id="rm"
          />

          <FormSubmitButton title="Adicionar aluno" />

          <button className="flex justify-between items-center w-full text-left font-light bg-[#008000] hover:brightness-110 transition-all text-white mb-2 p-3">
            Importar planilha
            <Upload strokeWidth={1} />
          </button>
        </form>
      </MyModal>
    </>
  )
}
