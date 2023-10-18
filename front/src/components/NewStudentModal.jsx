'use client'

import { useState } from 'react'
import MyModal from './Modal'
import FormSubmitButton from './FormSubmitButton'
import { PlusCircle, Upload } from 'lucide-react'
import H2 from './H2'
import * as XLSX from 'xlsx'
import { api } from '@/lib/api'

export default function NewStudentModal() {
  // Modal control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  // Read excel function
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (event) => {
        const bufferArray = event.target.result

        const wb = XLSX.read(bufferArray, { type: 'buffer' })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)

        resolve(data)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })

    promise
      .then((response) => {
        // console.log(response)
        // fetch('http://localhost:3000/api/alunos', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json',
        //   },
        //   body: {
        //     students: JSON.stringify(response),
        //   },
        // }).then((response) => console.log(response))
        // // .then((data) => console.log(data))
        api
          .post('/alunos', { ...response })
          .then((response) => console.log(response.data))
      })
      .catch((err) => console.log(err))
  }

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

        <form
          action=""
          method="POST"
          className="mt-8"
          encType="multipart/form-data"
        >
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

          <label
            htmlFor="fileInput"
            className="hover:cursor-pointer flex justify-between items-center w-full text-left font-light bg-[#008000] hover:brightness-110 transition-all text-white mb-2 p-3"
          >
            Importar planilha
            <Upload strokeWidth={1} />
          </label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            accept=".xlsx"
            className="invisible"
            onChange={(event) => {
              event.preventDefault()
              const file = event.target.files[0]

              readExcel(file)
            }}
          />
        </form>
      </MyModal>
    </>
  )
}
