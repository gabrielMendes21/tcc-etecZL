'use client'

import { useState } from 'react'
import CircleProgress from '@/components/circle/CircleProgress'
import Task from '@/components/Task'
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Check,
  Clock4,
  Percent,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isActive, setIsActive] = useState(true)
  const handleDropDown = () => setIsActive(!isActive)

  return (
    <main className="px-4 relative flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-xl py-7">Olá, Danilo!</h1>
        <span className="text-xs">3ºDS AMS, ETEC Zona Leste</span>
      </div>

      <hr className="border-[#C6C6C6]" />

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
          <Task name="Pré-projeto" hours={2} dueDate="19/03/2023" />
          <Task name="Diagramas do projeto" hours={6} dueDate="02/04/2023" />
        </div>

        <Link
          href="/atividades"
          className="text-highlighted text-xxs underline flex items-center gap-1 mt-4"
        >
          Ver mais
          <ArrowRight size={12} />
        </Link>
      </div>

      <div className="progress-info flex items-center mt-14 justify-between">
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
    </main>
  )
}
