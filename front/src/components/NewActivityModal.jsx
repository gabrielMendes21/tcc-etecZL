'use client'

import { PlusCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'
import FormSubmitButton from './FormSubmitButton'
import H2 from './H2'
import MyModal from './Modal'

export default function NewActivityModal() {
  const [isOpen, setIsOpen] = useState()
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex gap-3 mt-5 invisible absolute md:visible md:relative"
      >
        <PlusCircle color="#C6C6C6" />
        Nova atividade
      </button>

      <MyModal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
        <H2 title="Criar atividade" />

        <form action="" className="mt-8">
          <label htmlFor="class" className="text-sm">
            Turma
          </label>
          <select
            required
            id="class"
            name="class"
            className="py-3 px-4 text-sm block mt-3 mb-6 w-full bg-[#F4F4F4]"
            defaultValue=""
          >
            <option value="" disabled className="text-sm">
              Selecione uma turma
            </option>
            <option value="" className="text-sm">
              1º AMS
            </option>
            <option value="" className="text-sm">
              2º AMS
            </option>
            <option value="" className="text-sm">
              3º AMS
            </option>
          </select>

          <label htmlFor="task-name" className="text-sm">
            Nome da atividade
          </label>
          <input
            type="text"
            id="task-name"
            className="mt-3 mb-6 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
            placeholder="Digite o nome da atividade"
          />

          <label htmlFor="task-details" className="text-sm">
            Detalhes da atividade
          </label>
          <textarea
            id="task-details"
            cols="30"
            rows="10"
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            placeholder="Digite os detalhes da atividade"
          ></textarea>

          <label htmlFor="task-date" className="text-sm">
            Data de entrega
          </label>
          <input
            type="date"
            id="task-date"
            className="mt-3 mb-6 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          />

          <label htmlFor="task-files" className="text-sm">
            Anexar materiais de apoio
          </label>
          <input
            id="task-files"
            type="file"
            multiple
            className="mt-3 mb-6 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2 text-sm"
          />

          <FormSubmitButton title="Editar" />
          <button className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] text-white p-3">
            Excluir atividade
            <Trash2 strokeWidth={1} />
          </button>
        </form>
      </MyModal>
    </>
  )
}
