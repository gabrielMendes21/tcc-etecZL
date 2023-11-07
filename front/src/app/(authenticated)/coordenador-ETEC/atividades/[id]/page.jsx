import Card from '@/components/Card'
import Main from '@/components/Main'
import { api } from '@/lib/api'
import Link from 'next/link'

export async function generateStaticParams() {
  const response = await api.get(`/atividades`)

  const tasks = response.data

  return tasks.map((task) => ({
    id: task.id.toString(),
  }))
}

export default async function TaskPage({ params }) {
  const taskResponse = await api.get('/atividade', {
    params: {
      taskId: params.id,
    },
  })

  const task = taskResponse.data

  const taskDeliveriesResponse = await api.get('/entregas', {
    params: {
      taskId: params.id,
    },
  })

  const taskDeliveries = taskDeliveriesResponse.data

  const deliveredTasks = taskDeliveries.filter((taskDelivery) => {
    return taskDelivery.entregue
  })

  const notDeliveredTasks = taskDeliveries.filter((taskDelivery) => {
    return !taskDelivery.entregue
  })

  return (
    <Main>
      <div className="text-center my-7">
        <h1 className="text-xl md:text-2xl">{task.titulo}</h1>
        <span className=" text-black/60 block mb-7">
          {task.tipoAtividade.tipoAtividade}
        </span>
      </div>

      <div>
        <h2 className="text-base py-7 md:text-2xl">Entregas</h2>
      </div>
      {deliveredTasks.length === 0 ? (
        <span className="text-black/60">Não existem atividades entregues</span>
      ) : (
        deliveredTasks.map((task) => {
          return (
            <Link href={`${params.id}/aluno/${task.aluno.id}`}>
              <Card>
                <span className="text-lg">{task.aluno.nome}</span>
              </Card>
            </Link>
          )
        })
      )}

      <div>
        <h2 className="text-base py-7 md:text-2xl">Pendentes</h2>
      </div>
      {notDeliveredTasks.length === 0 ? (
        <span className="text-black/60">
          Todos os alunos entregaram a atividade
        </span>
      ) : (
        notDeliveredTasks.map((task) => {
          return (
            <Link href={`${params.id}/aluno/${task.aluno.id}`}>
              <Card>
                <span className="text-lg">{task.aluno.nome}</span>
              </Card>
            </Link>
          )
        })
      )}
    </Main>
  )
}
