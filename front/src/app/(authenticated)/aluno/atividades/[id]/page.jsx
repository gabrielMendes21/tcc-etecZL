import FileForm from '@/components/FileForm'
import ImageModal from '@/components/ImageModal'
import Main from '@/components/Main'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import Link from 'next/link'

export async function generateStaticParams() {
  const response = await api.get(`/atividades`)

  const tasks = response.data

  return tasks.map((task) => ({
    id: task.id.toString(),
  }))
}

export default async function Atividade({ params }) {
  // Get user id
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token').value

  const userInfoResponse = await api.get(`/login`, {
    params: {
      token,
    },
  })

  const userId = userInfoResponse.data.sub

  // Get tasks
  const tasksResponse = await api.get(`/aluno/atividades?id=${userId}`)

  // Find page task
  const task = tasksResponse.data.find(
    (task) => task.id.toString() === params.id,
  )

  // Get task due date
  const taskDueDate = new Date(task.atividade.prazoEntrega)
  const now = new Date()
  now.setHours(now.getHours() - 3)

  // Get task attachments
  if (task.atividade.anexos) {
    const files = task.atividade.anexos.split(", ")

    await api.get('/atividade/anexos', {
      params: {
        taskId: task.atividade.id,
      },
    })
  }


  // Verify if task is sent, overdue or pending
  const sent = task.entregue
  const overdue = taskDueDate < now && !sent
  // const pending = !sent && !overdue

  console.log(task)

  return (
    <Main>
      {task.atividade.tipoAtividade.tipoAtividade}
    </Main>
  )
}

export const dynamic = 'force-dynamic'

// {/* Task info */}
// <div className="space-y-10">
// <div className="pt-7">
//   <h1 className="text-center font-medium text-xl">
//     {task.atividade.titulo}
//   </h1>
//   <span className="block text-center">
//     {new Date(task.atividade.prazoEntrega).toLocaleDateString()}
//   </span>
// </div>

// <hr className="border-[#C6C6C6]" />

// {/* Task details */}
// <div>
//   <h2 className="font-medium">Detalhes da tarefa:</h2>
//   <p className="py-3 text-justify text-xs leading-relaxed">
//     {task.atividade.descricao}
//   </p>
// </div>

// {/* Attached files */}
// <div className="font-medium">
//   <h2 className="mb-4">Materiais disponíveis:</h2>
//   {files.length === 0 ? (
//     <span className="text-black/60">Nenhum material disponível</span>
//   ) : (
//     files.map((filename) => {
//       return filename.includes('.pdf') ? (
//         <Link
//           href={`/${filename}`}
//           target="_blank"
//           className="bg-highlighted text-white px-2 w-max block mt-5"
//           key={filename.split('-', 1)}
//         >
//           {filename}
//         </Link>
//       ) : (
//         <ImageModal filename={filename} key={filename.split('-', 1)} />
//       )
//     })
//   )}
// </div>

// <hr className="border-[#C6C6C6]" />

// {/* Student work */}
// <div className="font-medium">
//   {sent ? (
//     <>
//       <h2 className="mb-4">Meu trabalho:</h2>
//       <p className="font-normal">{task.conteudo}</p>
//     </>
//   ) : overdue ? (
//     ''
//   ) : (
//     <>
//       <h2 className="mb-4">Meu trabalho:</h2>
//       <FileForm />
//     </>
//   )}
// </div>
// </div>
