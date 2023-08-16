import Main from '@/components/Main'
import CircleProgress from '@/components/circle/CircleProgress'
import { Check, Clock4, FileText, Percent, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Perfil() {
  return (
    <Main>
      <span className="block mt-7 font-medium text-xl text-center">
        Danilo Costa Rodrigues
      </span>
      <span className="block font-light text-center">
        danilo.rodrigues108@etec.sp.gov.br
      </span>

      <hr className="border-[#C6C6C6] mt-8 mb-6" />

      <div className="progress-info">
        {/* Progress info */}
        <h2 className="text-base lg:text-2xl mt-5 mb-8">
          Atividades do programa P-TECH
        </h2>

        <div className="flex items-center justify-between md:gap-10 my-4 text-right">
          <CircleProgress ABSNumber={22} reference={10} unity="horas" />
          <ul className="space-y-4 lg:text-center">
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Check color="#0F62FE" />
              10 Horas concluídas
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Clock4 color="#0F62FE" />
              12 horas restantes
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Percent color="#0F62FE" />
              45% do caminho
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[#C6C6C6] mt-8 mb-6" />

      <Link
        href="/coordenador-ETEC/atividades/classe/classe1/aluno"
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Gerar relatório
        <FileText strokeWidth={1} />
      </Link>

      <div className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 p-3">
        Excluir aluno
        <Trash2 strokeWidth={1} />
      </div>
    </Main>
  )
}
