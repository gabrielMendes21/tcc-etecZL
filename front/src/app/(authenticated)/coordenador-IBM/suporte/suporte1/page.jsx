'use client'

import FormSubmitButton from '@/components/FormSubmitButton'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Modal from '@/components/Modal'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Suporte() {
  // Modal Control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      <h1 className="block mt-7 font-medium text-xl text-center">Suporte</h1>
      {/* Request subject */}
      <span className="block font-light text-center">Reconsiderações</span>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Support message */}
      <div className="my-8">
        <h2 className="font-medium md:text-xl">Mensagem:</h2>
        <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
          Olá. Gostaria de fazer uma consideração sobre as minhas horas, que não
          foram contabilizadas, sendo que eu fiz todas as atividades propostas
          pelo programa.
        </p>
      </div>

      {/* Support request author */}
      <span className="text-xs block">
        Danilo Costa Rodrigues - 3º AMS, ETEC Zona Leste
      </span>
      <span className="font-light text-xs text[#525252]">12/05/2023</span>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Answer button (mobile) */}
      <Link
        href="suporte1/responder"
        className="md:absolute md:invisible flex justify-between items-center w-full md:w-0 text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Responder
        <ArrowRight strokeWidth={1} />
      </Link>

      {/* Answer button (Tablets and PC's) */}
      <button
        onClick={handleOpen}
        className="absolute invisible md:relative md:visible flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Responder
        <ArrowRight strokeWidth={1} />
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
        <H2 title="Responder suporte" />

        <form action="" className="mt-8">
          <label htmlFor="assunto">Assunto</label>
          <input
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            type="text"
            disabled
            value="Contabilização de horas"
          />

          <label htmlFor="resposta">Resposta</label>
          <textarea
            id="resposta"
            cols="30"
            rows="10"
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            placeholder="Digite a sua resposta"
          ></textarea>

          <FormSubmitButton title="Enviar resposta" />
        </form>
      </Modal>
      {/* <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="w-1/2 h-4/5 bg-white p-8 overflow-y-auto">
          <H2 title="Responder suporte" />

          <form action="" className="mt-8">
            <label htmlFor="resposta">Resposta</label>
            <textarea
              id="resposta"
              cols="30"
              rows="10"
              className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
              placeholder="Digite a sua resposta"
            ></textarea>

            <FormSubmitButton title="Enviar resposta" />
          </form>
        </div>
      </Modal> */}
    </Main>
  )
}
