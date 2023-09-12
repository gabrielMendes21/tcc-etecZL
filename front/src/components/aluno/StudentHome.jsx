import Main from '../Main'
import UserInfo from '../UserInfo'
import Link from 'next/link'
import Task from '../Task'
import TradLink from '../Link'
import CircleProgress from '../circle/CircleProgress'
import { Check, Clock4, Percent } from 'lucide-react'

export default async function StudentHome() {
  return (
    <Main>
      {/* Student info */}
      <UserInfo />

      {/* Main activities */}
      <div className="lg:flex lg:justify-center lg:mt-12">
        <div className="lg:grow">
          {/* Main activities */}
          <h2 className="text-base lg:text-2xl mt-5 mb-8">
            Atividades do programa P-TECH
          </h2>
          <div className="activities space-y-5">
            <Link href="/aluno/atividades/pre-projeto" className="block mb-5">
              <Task name="Pré-projeto" hours={2} dueDate="19/03/2023" />
            </Link>
            <Task name="Diagramas do projeto" hours={6} dueDate="02/04/2023" />

            {/* See more link */}
            <TradLink to="/aluno/atividades" size={10}>
              Ver mais
            </TradLink>
          </div>
        </div>

        <hr className="border-[#C6C6C6] my-4 lg:rotate-90 lg:w-72 lg:self-center" />

        <div className="progress-info">
          {/* Progress info */}
          <h2 className="text-base lg:text-2xl mt-5 mb-8">
            Horas anuais concluídas
          </h2>

          <div className="flex items-center justify-start gap-10 my-4">
            <CircleProgress unity="horas" />
            <ul className="space-y-4 lg:text-center">
              <li className="flex items-center text-left gap-3 text-xxs lg:text-xs">
                <Check color="#0F62FE" />x Horas concluídas
              </li>
              <li className="flex items-center gap-3 text-xxs lg:text-xs">
                <Clock4 color="#0F62FE" />x horas restantes
              </li>
              <li className="flex items-center gap-3 text-xxs lg:text-xs">
                <Percent color="#0F62FE" />x do caminho
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  )
}
