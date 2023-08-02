import Card from '@/components/Card'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import CircleProgress from '@/components/circle/CircleProgress'
import { Check, Clock4, FileText, Percent } from 'lucide-react'
import Link from 'next/link'

export default function Classe() {
  return (
    <Main>
      <H1 title="1º AMS" />

      <div className="progress-info my-6">
        <h2 className="lg:text-center md:text-2xl">
          Atividades concluídas por alunos
        </h2>

        <div className="flex items-center justify-between my-4 text-right">
          <CircleProgress ABSNumber={40} reference={18} unity="alunos" />
          <ul className="space-y-4 lg:text-center">
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Check color="#0F62FE" />
              12 Horas concluídas
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Clock4 color="#0F62FE" />8 horas restantes
            </li>
            <li className="flex items-center gap-3 text-xxs lg:text-xs">
              <Percent color="#0F62FE" />
              60% do caminho
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[#C6C6C6]" />

      <Link
        href="/coordenador-ETEC/atividades/pitch/editar"
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Gerar relatório
        <FileText strokeWidth={1} />
      </Link>

      <hr className="border-[#C6C6C6] my-8" />

      <div className="space-y-2">
        <h2 className="md:text-2xl mb-6">Alunos</h2>
        <Link href="/coordenador-ETEC/classe/classe1/aluno">
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

      {/* <NewButton
        text="Adicionar aluno"
        to="/coordenador-ETEC/classe/classe1/aluno/novo-aluno"
      /> */}
    </Main>
  )
}
