import axios from 'axios'
import Task from './Task'
import Link from 'next/link'
import TradLink from './Link'
import { cookies } from 'next/headers'

export default async function PendingTasks() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token').value

  // Get user information by sending the token in the cookies
  const userInfoResponse = await axios(
    `${process.env.NEXT_PUBLIC_WEB_URL}api/login`,
    {
      params: {
        token,
      },
    },
  )

  const user = userInfoResponse.data

  // Get the user tasks
  const tasksInfoResponse = await axios(
    `${process.env.NEXT_PUBLIC_WEB_URL}api/aluno/atividades/pendentes?id=${user.sub}`,
  )

  const tasks = tasksInfoResponse.data.filter((task, index) => {
    return index <= 1
  })

  return tasks.length > 0 ? (
    <div className="lg:grow">
      <h2 className="text-base lg:text-2xl mt-5 mb-8">
        Atividades do programa P-TECH
      </h2>

      <div className="space-y-5">
        {tasks.map((task) => {
          return (
            <Link href={`/aluno/atividades/${task.id}`}>
              <Task
                name={task.atividade.titulo}
                hours={task.atividade.horasAtividade}
                dueDate={
                  new Date(task.atividade.prazoEntrega)
                    .toLocaleString('pt-BR')
                    .split(', ')[0]
                }
              />
            </Link>
          )
        })}
        {/* See more link */}
        <TradLink to="/aluno/atividades" size={10}>
          Ver mais
        </TradLink>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="text-base lg:text-2xl mt-5 mb-5">
        Atividades do programa P-TECH
      </h2>
      <span className="text-black/30 block">
        Você não possui nenhuma atividade
      </span>
    </div>
  )
}