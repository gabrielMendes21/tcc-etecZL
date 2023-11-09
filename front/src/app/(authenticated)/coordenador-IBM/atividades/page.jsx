import H1 from '@/components/H1'
import IBMCoordinatorTasksTab from '@/components/IBMCoordinatorTasksTab'
import Main from '@/components/Main'
import NewActivityModal from '@/components/NewActivityModal'
import NewButton from '@/components/NewButton'
import { api } from '@/lib/api'
import prisma from '@/lib/prisma'

export default async function Atividades() {
  const classesTasks = await prisma.turma.findMany({
    where: {
      ano: new Date().getFullYear(),
    },
    include: {
      escola: true,
      Usuario: {
        include: {
          Entrega: {
            include: {
              atividade: true,
            },
          },
        },
      },
    },
  })
  console.log(classesTasks)

  const response = await api.get('/turmas')
  const classes = response.data

  return (
    <Main>
      <H1 title="Atividades" />

      <IBMCoordinatorTasksTab classesTasks={classesTasks} />

      <NewButton
        to="/coordenador-IBM/atividades/nova-atividade"
        text="Nova atividade"
      />

      <NewActivityModal classes={classes} />
    </Main>
  )
}
