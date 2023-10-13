import Main from '@/components/Main'
import { api } from '@/lib/api'
import Card from '@/components/Card'
import NewButton from '@/components/NewButton'
import { Check, FileText, Percent, Users } from 'lucide-react'
import Link from 'next/link'
import NewStudentModal from '@/components/NewStudentModal'
import prisma from '@/lib/prisma'

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

  return (
    <Main>
      <div className="text-center">
        <h1 className="text-xl pt-7 md:text-2xl">{turma.nomeTurma}</h1>
        <span className="block mb-7 text-[#525252]">{turma.ano}</span>
        <hr className="border-[#C6C6C6]" />
      </div>

      <div className="progress-info my-6">
        {/* Class stats */}
        <h2 className=" text-center md:text-2xl">Desempenho da turma</h2>

        <div className="w-full bg-blue-gradient rounded-full h-6 my-6"></div>

        <ul className="space-y-4 lg:text-center">
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Check color="#0F62FE" />
            10 alunos concluíram todas as atividades
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Percent color="#0F62FE" />
            25% - 10/40 alunos;
          </li>
          <li className="flex items-center gap-3 text-xxs lg:text-xs">
            <Users color="#0F62FE" />
            30 alunos restantes
          </li>
        </ul>
      </div>

      <hr className="border-[#C6C6C6]" />

      {/* Generate report */}
      <Link
        href="#"
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Gerar relatório
        <FileText strokeWidth={1} />
      </Link>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Students */}
      <div className="space-y-2">
        <h2 className="md:text-2xl mb-6">Alunos</h2>
        <Link href="turma1/aluno">
          <Card>
            <span className="text-base">Danilo Costa Rodrigues</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">Lucas Carvalho</span>
        </Card>
        <Card>
          <span className="text-base">João Vitor</span>
        </Card>
      </div>

      {/* New student button (mobile) */}
      <NewButton text="Adicionar aluno" to="turma1/aluno/novo-aluno" />

      {/* Modal */}
      <NewStudentModal />
    </Main>
  )
}
