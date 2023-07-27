'use client'

import { useState, useContext } from 'react'
import CircleProgress from '@/components/circle/CircleProgress'
import Task from '@/components/Task'
import { ChevronDown, ChevronRight, Check, Clock4, Percent } from 'lucide-react'
import Link from 'next/link'
import Delay from '@/components/LoadDelay'
import UserInfo from '../UserInfo'
import TradLink from '../Link'
import { PageContext } from '@/app/context/PageContext'

export default function StudentHome() {
  // Controlling the dropdown
  const [isActive, setIsActive] = useState(true)
  const handleDropDown = () => setIsActive(!isActive)

  const { setUserType } = useContext(PageContext)

  return (
    <main className="px-4 my-16">
      <Delay>
        {/* Student info */}
        <UserInfo name="Danilo" status="3ºDS AMS, ETEC Zona Leste" />
        <p
          className="underline absolute right-0 top-0 z-50 text-xxs"
          onClick={() => {
            setUserType('coordenador ETEC')
          }}
        >
          Trocar usuário
        </p>

        {/* Main activities */}
        <div>
          <h2 className="text-base mt-5 mb-8">Atividades do programa P-TECH</h2>
          <div
            className="dropdown flex items-end gap-2 mb-6"
            onClick={handleDropDown}
          >
            <h3 className="font-medium">Em breve</h3>
            {isActive ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          <div
            style={{
              display: isActive ? 'block' : 'none',
            }}
            className="activities space-y-5"
          >
            <Link href="/student/atividades/pre-projeto" className="block mb-5">
              <Task name="Pré-projeto" hours={2} dueDate="19/03/2023" />
            </Link>
            <Task name="Diagramas do projeto" hours={6} dueDate="02/04/2023" />

            {/* See more link */}
            <TradLink to="/student/atividades" size={10}>
              Ver mais
            </TradLink>
          </div>
        </div>

        <hr className="border-[#C6C6C6] my-4" />

        {/* Progress info */}
        <div className="progress-info grid grid-cols-[1fr] items-center gap-y-6">
          <h2 className="col-span-1/2">Horas anuais concluídas</h2>
          <CircleProgress percentage={60} />
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-xxs">
              <Check color="#0F62FE" />
              12 Horas concluídas
            </li>
            <li className="flex items-center gap-3 text-xxs">
              <Clock4 color="#0F62FE" />8 horas restantes
            </li>
            <li className="flex items-center gap-3 text-xxs">
              <Percent color="#0F62FE" />
              60% do caminho
            </li>
          </ul>
        </div>
      </Delay>
    </main>
  )
}
