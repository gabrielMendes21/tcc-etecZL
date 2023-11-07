import H2 from '@/components/H2'
import Main from '@/components/Main'
import TaskCorrectionForm from '@/components/TaskCorrectionForm'
import { api } from '@/lib/api'

export async function generateStaticParams() {
  const taskDeliveriesResponse = await api.get('/entregas')

  const taskDeliveries = taskDeliveriesResponse.data

  return taskDeliveries.map((taskDelivery) => {
    return {
      entrgaId: taskDelivery.id.toString(),
    }
  })
}

export default async function StudentPage({ params }) {
  const taskDeliverieResponse = await api.get('/entrega', {
    params: {
      taskDeliveryId: params.entregaId,
    },
  })

  const taskDelivery = taskDeliverieResponse.data
  const taskDeliveryDate = new Date(taskDelivery.dataEntrega)

  console.log(taskDelivery)

  return (
    <Main>
      <div className="text-center my-7">
        <h1 className="text-xl md:text-2xl">{taskDelivery.aluno.nome}</h1>
        <span className=" text-black/60 block mb-7">
          Entregue em {taskDeliveryDate.toLocaleDateString()}
        </span>
        <hr className="border border-[#C6C6C6]" />
      </div>

      <div>
        <span className="block text-2xl mb-4 mt-6">Conhecimento:</span>
        <span className="text-black/60">
          {taskDelivery.conteudo.conhecimento}
        </span>

        <span className="block text-2xl mb-4 mt-6">Anexos:</span>
        {!taskDelivery.conteudo.anexos ? (
          <span className="text-black/60 text-xl">Nenhum arquivo anexado</span>
        ) : (
          <></>
        )}
      </div>

      <H2 title="Correção" />
      <TaskCorrectionForm taskDelivery={taskDelivery} />
    </Main>
  )
}
