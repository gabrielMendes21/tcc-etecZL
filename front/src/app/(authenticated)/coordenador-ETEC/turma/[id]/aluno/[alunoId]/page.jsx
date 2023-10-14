import Main from '@/components/Main'
import CircleProgress from '@/components/circle/CircleProgress'
import EditStudentModal from '@/components/EditStudentModal'
import { api } from '@/lib/api'
import { FileText, Pen, Trash2 } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const studentsResponse = await api.get('/alunos')
  const students = studentsResponse.data

  return students.map((student) => {
    return {
      alunoId: student.id.toString(),
    }
  })
}

export default async function Aluno({ params }) {
  const studentResponse = await api.get('/aluno', {
    params: {
      id: params.alunoId,
    },
  })

  const student = studentResponse.data

  return (
    <Main>
      {/* Student info */}
      <span className="block mt-7 font-medium text-xl text-center">
        {student.nome}
      </span>
      <span className="block font-light text-center">{student.email}</span>

      <hr className="border-[#C6C6C6] mt-8 mb-6" />

      <div className="md:flex md:items-center md:justify-around md:gap-10">
        {/* Left (PC) */}
        <div>
          <div className="progress-info">
            {/* Progress info */}
            <h2 className="text-base lg:text-2xl mt-5 mb-8">
              Atividades do programa P-TECH
            </h2>
            <div className="flex items-center justify-between md:gap-10 my-4 text-right">
              <CircleProgress unity="horas" user={student} />
            </div>
          </div>
        </div>

        <hr className="border-[#C6C6C6] mt-8 mb-6 md:invisible" />

        {/* Right (PC) */}
        {/* Options */}
        <div className="grow">
          <button className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3">
            Gerar relatório
            <FileText strokeWidth={1} />
          </button>

          {/* Mobile button */}
          <Link
            className="flex justify-between items-center md:w-0 w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white my-3 p-3 md:absolute md:invisible"
            href={`${params.alunoId}/editar`}
          >
            Editar aluno
            <Pen strokeWidth={1} />
          </Link>

          {/* PC button */}

          <button
            // onClick={handleOpen}
            className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 p-3"
          >
            Excluir aluno
            <Trash2 strokeWidth={1} />
          </button>

          {/* Modal */}
          <EditStudentModal studentData={student} />
        </div>
      </div>
    </Main>
  )
}
