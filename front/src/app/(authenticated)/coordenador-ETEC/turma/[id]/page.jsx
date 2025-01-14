import Card from '@/components/Card'
import GenerateReportButton from '@/components/GenerateReportButton'
import Main from '@/components/Main'
import NewButton from '@/components/NewButton'
import NewStudentModal from '@/components/NewStudentModal'
import { api } from '@/lib/api'
import { Check, Percent, Users } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const classesResponse = await api.get('/turmas')
  const classes = classesResponse.data

  return classes.map((schoolClass) => {
    return {
      id: schoolClass.id.toString(),
    }
  })
}

export default async function Turma({ params }) {
  const classResponse = await api.get(`/turmas`)

  const turma = classResponse.data.filter((schoolclass) => {
    return schoolclass.id === Number(params.id)
  })[0]

  // Get all students
  const response = await api.get(`/alunos?classId=${params.id}`)

  const students = response.data

  // Check students with all the tasks completed
  const studentsWithAllTasksDone =
    students.length > 0
      ? students.filter((student) => {
          return student.Entrega.every((task) => {
            return task.entregue === true
          })
        })
      : []

  return (
    <Main>
      {/* Class title */}
      <div className="text-center">
        <h1 className="text-xl pt-7 md:text-2xl">{turma.nomeTurma}</h1>
        <span className="block mb-7 text-[#525252]">{turma.ano}</span>
        <hr className="border-[#C6C6C6]" />
      </div>

      <div className="progress-info my-6">
        {/* Class stats */}
        <h2 className=" text-center md:text-2xl">Desempenho da turma</h2>

        <div
          className="w-full rounded-full h-6 my-6"
          style={{
            background: `linear-gradient(90deg, blue ${
              ((studentsWithAllTasksDone.length ?? 0) / students.length ?? 0) *
              100
            }%, #D9D9D9 0%)`,
          }}
        ></div>

        <ul className="space-y-4 lg:text-center">
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Check color="#0F62FE" />
            {studentsWithAllTasksDone.length} aluno(s) concluíram todas as
            atividades
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Percent color="#0F62FE" />
            {Math.round(
              ((studentsWithAllTasksDone.length ?? 0) / students.length) * 100,
            )}
            % - {studentsWithAllTasksDone.length}/{students.length} alunos
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Users color="#0F62FE" />
            {students.length - studentsWithAllTasksDone.length} alunos restantes
          </li>
        </ul>
      </div>

      <hr className="border-[#C6C6C6]" />

      {/* Generate report */}
      <GenerateReportButton />

      <hr className="border-[#C6C6C6] my-8" />

      {/* Students */}
      <div className="space-y-2">
        <h2 className="md:text-2xl mb-6">Alunos</h2>
        {students.map((student) => {
          return (
            <Link href={`${params.id}/aluno/${student.id}`} key={student.id}>
              <Card>
                <span className="text-base">{student.nome}</span>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* New student button (mobile) */}
      <NewButton text="Adicionar aluno" to={`${params.id}/novo-aluno`} />

      {/* Modal */}
      <NewStudentModal />
    </Main>
  )
}

export const dynamic = 'force-dynamic'
