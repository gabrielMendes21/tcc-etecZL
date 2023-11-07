import Main from '@/components/Main'
import TaskDeliveryDate from '@/components/TaskDeliveryDate'
import { api } from '@/lib/api'

export async function generateStaticParams() {
  const studentsResponse = await api.get('/alunos')

  const students = studentsResponse.data

  return students.map((student) => {
    return {
      alunoId: student.id.toString(),
    }
  })
}

export default async function StudentPage({ params }) {
  const studentResponse = await api.get('/aluno', {
    params: {
      id: params.alunoId,
    },
  })

  const student = studentResponse.data

  return (
    <Main>
      <div className="text-center my-7">
        <h1 className="text-xl md:text-2xl">{student.nome}</h1>
        <TaskDeliveryDate />
      </div>
    </Main>
  )
}
