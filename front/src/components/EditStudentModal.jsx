'use client'

import { useState } from 'react'
import MyModal from './Modal'
import FormSubmitButton from './FormSubmitButton'
import H2 from './H2'
import { Pen } from 'lucide-react'

export default function EditStudentModal({ studentData }) {
  // Input values
  const [name, setName] = useState(studentData.nome)
  const [email, setEmail] = useState(studentData.email)
  const [rm, setRm] = useState(studentData.rm)

  // Modal control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    // PC Button
    <>
      <button
        onClick={handleOpen}
        className="absolute invisible w-0 md:static md:visible flex justify-between items-center md:w-full text-left font-light bg-highlighted hover:cursor-pointer hover:brightness-110 transition-all text-white p-3 my-3"
      >
        Editar aluno
        <Pen strokeWidth={1} />
      </button>

      {/* Modal */}
      <MyModal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
        <H2 title="Editar aluno" />

        <form action="" className="mt-8">
          <label htmlFor="name">Nome do aluno</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o nome do aluno"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o email institucional do aluno"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="rm">RM</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o RM do aluno"
            id="rm"
            value={rm}
            onChange={(e) => setRm(e.target.value)}
          />

          <FormSubmitButton title="Editar aluno" />
        </form>
      </MyModal>
    </>
  )
}
