'use client'

import Card from '@/components/Card'
import Dropdown from '@/components/Dropdown'
import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Modal from '@/components/Modal'
import NewButton from '@/components/NewButton'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

export default function Suporte() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      <H1 title="Suporte" />

      {/* Complaints sent */}
      <Dropdown title="Solicitações enviadas">
        <Card>
          <span className="text-base">Horas não contabilizadas</span>
          <span>Aguardando resposta...</span>
        </Card>
        <Card>
          <span className="text-base">Erro na entrega</span>
          <span>Aguardando resposta...</span>
        </Card>
      </Dropdown>

      {/* Complaints answered  */}
      <Dropdown title="Solicitações respondidas">
        <Card>
          <span className="text-base">Atraso nas atividades</span>
          <span>Respondida em 20/09/2023</span>
        </Card>
        <Card>
          <span className="text-base">Dúvidas sobre a atividade</span>
          <span>Respondida em 12/05/2023</span>
        </Card>
      </Dropdown>

      {/* New support request button */}
      <NewButton text="Nova solicitação" to="suporte/nova-solicitacao" />

      {/* New acivity modal */}
      <button
        onClick={handleOpen}
        className="flex gap-3 mt-5 invisible absolute md:visible md:relative"
      >
        <PlusCircle color="#C6C6C6" />
        Nova solicitação
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <H2 title="Criar solicitação de suporte" />

        <form action="" className="mt-8">
          <label htmlFor="subject" className="text-sm">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Digite o assunto da sua solicitação"
            className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          />

          <label htmlFor="message" className="text-sm">
            Mensagem
          </label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
            placeholder="Digite sua mensagem"
          ></textarea>

          <hr className="border[#C6C6C6]" />

          <FormSubmitButton title="Enviar" />
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
          <H2 title="Criar solicitação de suporte" />

          <form action="" className="mt-8">
            <label htmlFor="subject" className="text-sm">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Digite o assunto da sua solicitação"
              className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
            />

            <label htmlFor="message" className="text-sm">
              Mensagem
            </label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
              placeholder="Digite sua mensagem"
            ></textarea>

            <hr className="border[#C6C6C6]" />

            <FormSubmitButton title="Enviar" />
          </form>
        </div>
      </Modal> */}
    </Main>
  )
}
