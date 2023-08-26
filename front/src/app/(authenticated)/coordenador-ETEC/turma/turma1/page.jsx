'use client'

import Card from '@/components/Card'
import FormSubmitButton from '@/components/FormSubmitButton'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Modal from '@/components/Modal'
import NewButton from '@/components/NewButton'
import {
  Check,
  FileText,
  Percent,
  PlusCircle,
  Upload,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Classe() {
  // Modal control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      <div className="text-center">
        <h1 className="text-xl pt-7 md:text-2xl">1º AMS</h1>
        <span className="block mb-7 text-[#525252]">2023</span>
        <hr className="border-[#C6C6C6]" />
      </div>

      <div className="progress-info my-6">
        {/* Class stats */}
        <h2 className=" text-center md:text-2xl">Desempenho da turma</h2>

        {/* <div className="flex items-center justify-between my-4 text-right">
          <CircleProgress ABSNumber={40} reference={18} unity="alunos" />
          <ul className="space-y-4 lg:text-center">
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Check color="#0F62FE" />
              12 Horas concluídas
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Clock4 color="#0F62FE" />8 horas restantes
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Percent color="#0F62FE" />
              60% do caminho
            </li>
          </ul>
        </div> */}
        <div className="w-full bg-blue-gradient rounded-full h-6 my-6"></div>

        <ul className="space-y-4 lg:text-center">
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Check color="#0F62FE" />
            10 alunos concluíram todas as atividades
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Percent color="#0F62FE" />
            25% - 10/40 alunos;
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Users color="#0F62FE" />
            30 alunos restantes
          </li>
        </ul>
      </div>

      <hr className="border-[#C6C6C6]" />

      {/* Generate report */}
      <Link
        href="#"
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Gerar relatório
        <FileText strokeWidth={1} />
      </Link>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Students */}
      <div className="space-y-2">
        <h2 className="md:text-2xl mb-6">Alunos</h2>
        <Link href="turma1/aluno">
          <Card>
            <span className="text-base">Danilo Costa Rodrigues</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">Lucas Carvalho</span>
        </Card>
        <Card>
          <span className="text-base">João Vitor</span>
        </Card>
      </div>

      {/* New student button (mobile) */}
      <NewButton text="Adicionar aluno" to="turma1/aluno/novo-aluno" />

      {/* New student button (tablets and PC's) */}
      <button
        onClick={handleOpen}
        className="flex gap-3 mt-5 absolute invisible md:static md:visible"
      >
        <PlusCircle color="#C6C6C6" />
        Adicionar aluno
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
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
      </Modal>
    </Main>
  )
}
