'use client'

import FormSubmitButton from '@/components/FormSubmitButton'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Modal from '@/components/Modal'
import CircleProgress from '@/components/circle/CircleProgress'
import { Check, Clock4, FileText, Pen, Percent, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Perfil() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      {/* Student info */}
      <span className="block mt-7 font-medium text-xl text-center">
        Danilo Costa Rodrigues
      </span>
      <span className="block font-light text-center">
        danilo.rodrigues108@etec.sp.gov.br
      </span>

      <hr className="border-[#C6C6C6] mt-8 mb-6" />

      <div className="progress-info">
        {/* Progress info */}
        <h2 className="text-base lg:text-2xl mt-5 mb-8">
          Atividades do programa P-TECH
        </h2>

        <div className="flex items-center justify-between md:gap-10 my-4 text-right">
          <CircleProgress ABSNumber={22} reference={10} unity="horas" />
          <ul className="space-y-4 lg:text-center">
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Check color="#0F62FE" />
              10 Horas concluídas
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Clock4 color="#0F62FE" />
              12 horas restantes
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Percent color="#0F62FE" />
              45% do caminho
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[#C6C6C6] mt-8 mb-6" />

      {/* Options */}
      <button className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3">
        Gerar relatório
        <FileText strokeWidth={1} />
      </button>

      <Link
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white my-3 p-3 md:absolute md:invisible"
        href="aluno/editar"
      >
        Editar aluno
        <Pen strokeWidth={1} />
      </Link>

      <button
        onClick={handleOpen}
        className="absolute invisible md:static md:visible flex justify-between items-center w-full text-left font-light bg-highlighted hover:cursor-pointer hover:brightness-110 transition-all text-white p-3 my-3"
      >
        Editar aluno
        <Pen strokeWidth={1} />
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
        <H2 title="Editar aluno" />

        <form action="" className="mt-8">
          <label htmlFor="name">Nome do aluno</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o nome do aluno"
            id="name"
            value="Danilo Costa Rodrigues"
          />

          <label htmlFor="email">Email</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o email institucional do aluno"
            id="email"
            value="danilo.rodrigues108@etec.sp.gov.br"
          />

          <label htmlFor="rm">RM</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            placeholder="Digite o RM do aluno"
            id="rm"
            value="22388"
          />

          <FormSubmitButton title="Editar aluno" />
        </form>
      </Modal>

      <button
        // onClick={handleOpen}
        className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 p-3"
      >
        Excluir aluno
        <Trash2 strokeWidth={1} />
      </button>

      {/* <Modal isOpen={isOpen} handleClose={handleClose}>
        <span className="md:text-2xl md:block">
        Você tem certeza que deseja excluir esse aluno?
        </span>
        <button
          onClick={handleClose}
          className="bg-[#BE2528] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 px-3 py-1 mr-5"
        >
          Sim
        </button>
        <button
          className="bg-[#008000] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 px-3 py-1"
          onClick={handleClose}
        >
          Não
        </button>
      </Modal> */}
    </Main>
  )
}
