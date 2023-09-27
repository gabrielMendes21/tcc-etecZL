import Main from '@/components/Main'
import { api } from '@/lib/api'
import { ArrowRight, File, Upload } from 'lucide-react'
import { cookies } from 'next/headers'

export async function generateStaticParams() {
  const response = await api.get(`/atividades`)

  const tasks = []

  return tasks.map((task) => ({
    id: task.id.toString(),
  }))
}

export default async function Atividade({ params }) {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token').value

  // Get user id
  const userInfoResponse = await api.get(`/login`, {
    params: {
      token,
    },
  })

  const userId = userInfoResponse.data.sub

  const tasksResponse = await api.get(
    `/aluno/atividades/pendentes?id=${userId}`,
  )

  const task = tasksResponse.data.find(
    (task) => task.id.toString() === params.id,
  )

  return (
    <Main>
      {/* Task info */}
      <div className="space-y-10">
        <div className="pt-7">
          <h1 className="text-center font-medium text-xl">
            {task.atividade.titulo}
          </h1>
          <span className="block text-center">
            {new Date(task.atividade.prazoEntrega).toLocaleString('pt-BR')}
          </span>
        </div>

        <hr className="border-[#C6C6C6]" />

        {/* Task details */}
        <div>
          <h2 className="font-medium">Detalhes da tarefa:</h2>
          <p className="py-3 text-justify text-xs leading-relaxed">
            {task.atividade.descricao}
          </p>
        </div>

        {/* Attached files */}
        <div className="font-medium">
          <h2 className="mb-4">Materiais disponíveis:</h2>
          <div className="border-2 border-highlighted text-highlighted p-3 flex gap-2 underline">
            <File />
            Arquivo1.png
          </div>
        </div>

        <hr className="border-[#C6C6C6]" />

        {/* Student work */}
        <div className="font-medium">
          <h2 className="mb-4">Meu trabalho:</h2>
          <div className="border-2 border-highlighted text-highlighted p-3 flex gap-2 underline">
            <Upload />
            Anexar arquivo
          </div>

          <button className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white mt-7 p-3">
            Enviar
            <ArrowRight strokeWidth={1} />
          </button>
        </div>
      </div>
    </Main>
  )
}

export const dynamic = 'force-dynamic'
