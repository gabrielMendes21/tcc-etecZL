import FlexibleHoursTask from '@/components/FlexibleHoursTask'
import LectureTask from '@/components/LectureTask'
import Main from '@/components/Main'
import SessionTask from '@/components/SessionTask'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

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

  // Get task attachments
  // if (task.atividade.anexos) {
  //   const files = task.atividade.anexos.split(', ')

  //   await api.get('/atividade/anexos', {
  //     params: {
  //       taskId: task.atividade.id,
  //     },
  //   })
  // }

  return (
    <Main>
      {task.atividade.tipoAtividade.tipoAtividade === 'Sessão' ? (
        <SessionTask task={task} />
      ) : task.atividade.tipoAtividade.tipoAtividade === 'Horas flexíveis' ? (
        <FlexibleHoursTask task={task} />
      ) : (
        <LectureTask task={task} />
      )}
    </Main>
  )
}

export const dynamic = 'force-dynamic'

// {/* Task info */}

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
// <FileForm />
//     </>
//   )}
// </div>
// </div>
