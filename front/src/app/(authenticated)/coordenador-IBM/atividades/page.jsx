'use client'

import H1 from '@/components/H1'
import Dropdown from '@/components/Dropdown'
import Task from '@/components/Task'
import Link from 'next/link'
import Main from '@/components/Main'
import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import FormSubmitButton from '@/components/FormSubmitButton'
import NewButton from '@/components/NewButton'
import H2 from '@/components/H2'
import Modal from '@/components/Modal'

export default function Atividades() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Main>
      <H1 title="Atividades" />

      {/* Pending activities */}
      <Dropdown title="Pendentes">
        <Link href="atividades/pitch">
          <Task name="Pitch de apresentação" hours={1} dueDate="19/05/2023" />
        </Link>
        <Task name="Cursos DIO" hours={1} dueDate="05/12/2023" />
      </Dropdown>

      {/* Past Activities */}
      <Dropdown title="Atividades passadas">
        <Task name="Pre-projeto" hours={2} dueDate="19/05/2023" />
        <Task name="Skills Build" hours={30} dueDate="25/06/2023" />
      </Dropdown>

      {/* New activity button */}
      <NewButton
        to="/coordenador-IBM/atividades/nova-atividade"
        text="Nova atividade"
      />

      {/* New acivity modal button */}
      <button
        onClick={handleOpen}
        className="flex gap-3 mt-5 invisible absolute md:visible md:relative"
      >
        <PlusCircle color="#C6C6C6" />
        Nova atividade
      </button>

      {/* Modal */}
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
        <div className="w-1/2 h-4/5 bg-white p-8 overflow-y-auto border-[2px] border-highlighted">
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
        </div>
      </Modal> */}
      <Modal isOpen={isOpen} handleClose={handleClose} onlyDesktop>
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
      </Modal>
    </Main>
  )
}
