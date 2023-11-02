import CoordinatorTasksTab from '@/components/CoordinatorTasksTab'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import NewActivityModal from '@/components/NewActivityModal'
import NewButton from '@/components/NewButton'
import prisma from '@/lib/prisma'

export default async function Atividades() {
  const firstYearTasks = await prisma.atividade.findMany({
    where: {
      entrega: {
        some: {
          aluno: {
            turma: {
              nomeTurma: {
                contains: '1',
              },
            },
          },
        },
      },
    },
  })

  const secondYearTasks = await prisma.atividade.findMany({
    where: {
      entrega: {
        some: {
          aluno: {
            turma: {
              nomeTurma: {
                contains: '2',
              },
            },
          },
        },
      },
    },
  })

  const thirdYearTasks = await prisma.atividade.findMany({
    where: {
      entrega: {
        some: {
          aluno: {
            turma: {
              nomeTurma: {
                contains: '3',
              },
            },
          },
        },
      },
    },
  })

  return (
    <Main>
      <H1 title="Atividades" />

      <CoordinatorTasksTab
        classesTasks={[firstYearTasks, secondYearTasks, thirdYearTasks]}
        coordinator="ETEC"
      />

      <NewButton
        to="/coordenador-ETEC/atividades/nova-atividade"
        text="Nova atividade"
      />

      <NewActivityModal />
    </Main>
  )
}
