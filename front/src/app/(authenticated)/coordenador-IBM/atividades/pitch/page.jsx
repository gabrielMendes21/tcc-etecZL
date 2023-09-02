'use client'

import Card from '@/components/Card'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import { ArrowRight, Image, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '@/components/Modal'
import FormSubmitButton from '@/components/FormSubmitButton'

export default function Pitch() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      {/* Task info */}
      <div>
        <div className="pt-7">
          <h1 className="text-center font-medium text-xl">
            Pitch de apresentação
          </h1>
          <span className="block text-center">19/05/2023</span>
        </div>

        <hr className="border-[#C6C6C6] my-10" />

        {/* Task details */}
        <div className="mb-10">
          <h2 className="font-medium">Detalhes da tarefa:</h2>
          <p className="p-3 text-justify text-xs leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iure corporis hic sit voluptate odit consequatur, eaque eum
            voluptatum, quaerat dolorum veritatis quis exercitationem error
            nesciunt quibusdam repudiandae. Assumenda, placeat!
          </p>
        </div>

        {/* Attached files */}
        <div>
          <h2 className="font-medium mb-4">Materiais disponíveis:</h2>
          <div className="border-2 border-highlighted text-highlighted p-3 flex gap-2 underline">
            <Image alt="image icon" />
            Arquivo1.png
          </div>
        </div>

        <hr className="border-[#C6C6C6] my-8" />

        {/* Edit activity link */}
        <Link
          href="pitch/editar"
          className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white p-3 md:invisible md:absolute md:w-0"
        >
          Editar atividade
          <ArrowRight strokeWidth={1} />
        </Link>

        {/* Edit activity modal button */}
        <button
          onClick={handleOpen}
          className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white p-3 invisible absolute md:visible md:static"
        >
          Editar atividade
        </button>

        {/* Modal */}
        <Modal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
          <H2 title="Criar atividade" />

          <form action="" className="mt-8">
            <label htmlFor="task-name" className="text-sm">
              Nome da atividade
            </label>
            <input
              type="text"
              id="task-name"
              className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
              placeholder="Digite o nome da atividade"
            />

            <label htmlFor="task-details" className="text-sm">
              Detalhes da atividade
            </label>
            <textarea
              id="task-details"
              cols="30"
              rows="10"
              className="mt-3 mb-8 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
              placeholder="Digite os detalhes da atividade"
            ></textarea>

            <label htmlFor="task-date" className="text-sm">
              Data de entrega
            </label>
            <input
              type="date"
              id="task-date"
              className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            />

            <label htmlFor="task-files" className="text-sm">
              Anexar materiais de apoio
            </label>
            <input
              id="task-files"
              type="file"
              multiple
              className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2 text-sm"
            />

            <FormSubmitButton title="Editar" />
            <button className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] text-white p-3">
              Excluir atividade
              <Trash2 strokeWidth={1} />
            </button>
          </form>
        </Modal>
      </div>

      <hr className="border-[#C6C6C6] mt-8" />

      {/* Sent Activities */}
      <H2 title="Entregues" />

      <Card>
        <span className="text-base">Gabriel da Silva Mendes</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
      <Card>
        <span className="text-base">Danilo Costa Rodrigues</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
      <Card>
        <span className="text-base">Andrei Florêncio Matias</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
    </Main>
  )
}
