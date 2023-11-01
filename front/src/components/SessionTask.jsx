'use client'

import { api } from '@/lib/api'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import FileField from './FileField'
import ImageModal from './ImageModal'

export default function SessionTask({ task }) {
  const [knowledge, setKnowledge] = useState('')
  const [files, setFiles] = useState([])

  const handleChange = (e) => {
    setKnowledge(e.target.value)
  }

  useEffect(() => {
    api
      .get(`/entrega/anexos?taskId=${task.id}`)
      .then((response) => setFiles(response.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData)

    console.log(formData)
  }

  // Get task due date
  const taskDueDate = new Date(task.atividade.prazoEntrega)
  const now = new Date()
  now.setHours(now.getHours() - 3)

  // Verify if task is sent, overdue or pending
  const sent = task.entregue
  const overdue = taskDueDate < now && !sent
  const pending = !sent && !overdue

  return (
    <div className="space-y-10">
      <div className="pt-7">
        <h1 className="text-center font-medium text-xl">
          {task.atividade.titulo}
        </h1>
        <span className="block text-center">
          {new Date(task.atividade.prazoEntrega).toLocaleDateString()}
        </span>
      </div>

      <hr className="border-[#C6C6C6]" />

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="knowledge">O que você aprendeu nessa sessão?</label>
        <textarea
          name="knowledge"
          id="knowledge"
          cols="30"
          rows="10"
          className="mt-3 mb-8 border-b block resize-none border-black w-full bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o que você aprendeu"
          value={sent ? task.conteudo.conhecimento : knowledge}
          disabled={!!(sent || overdue)}
          onChange={handleChange}
          required
        ></textarea>

        {sent ? (
          files ? (
            <>
              <span className="block">Anexos</span>
              {files.map((file) => {
                return <ImageModal filename={file} />
              })}
            </>
          ) : (
            ''
          )
        ) : pending ? (
          <>
            <span className="block mb-3">
              Anexe uma prova da sua presença nesta atividade
            </span>
            <FileField disabled={overdue} />
          </>
        ) : (
          ''
        )}

        <button
          type="submit"
          className={`flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3 ${
            overdue ? 'bg-red-700' : sent ? 'bg-gray-400' : ''
          }`}
          disabled={!!(sent || overdue)}
        >
          {overdue
            ? 'Atividade atrasada'
            : sent
            ? 'Atividade enviada'
            : 'Enviar'}
          <ArrowRight strokeWidth={1} />
        </button>
      </form>
    </div>
  )
}
