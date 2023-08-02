'use client'

import { useContext } from 'react'
import CircleProgress from '@/components/circle/CircleProgress'
import Task from '@/components/Task'
import { Check, Clock4, Percent } from 'lucide-react'
import Link from 'next/link'
import UserInfo from '../UserInfo'
import TradLink from '../Link'
import { PageContext } from '@/app/context/PageContext'
import Main from '../Main'

export default function StudentHome() {
  const { setUserType } = useContext(PageContext)

  return (
    <Main>
      {/* Student info */}
      <UserInfo name="Danilo" status="3ºDS AMS, ETEC Zona Leste" />
      <p
        className="underline absolute right-0 top-2 h-10 z-50 text-xxs hover:cursor-pointer"
        onClick={() => {
          setUserType('coordenador ETEC')
        }}
      >
        Trocar usuário
      </p>

      <div className="lg:flex lg:justify-center lg:mt-12">
        {/* Left */}
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

        {/* Right */}
        <div className="progress-info grid grid-cols-[1fr] items-center gap-y-6 lg:gap-x-10">
          {/* Progress info */}
          <h2 className="col-span-1/2 lg:text-center md:text-2xl">
            Horas anuais concluídas
          </h2>

          <CircleProgress ABSNumber={22} reference={10} unity="horas" />

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
    </Main>
  )
}
