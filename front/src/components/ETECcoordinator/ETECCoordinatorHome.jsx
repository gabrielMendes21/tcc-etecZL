'use client'

import Card from '../Card'
import H2 from '../H2'
import UserInfo from '../UserInfo'
import { useContext } from 'react'
import { PageContext } from '@/app/context/PageContext'

export default function ETECCoordinatorHome() {
  const { setUserType } = useContext(PageContext)

  return (
    <main className="px-4 my-16">
      {/* Coordinator info */}
      <UserInfo name="Rogério" status="Coordenador ETEC Zona Leste" />

      <p
        className="underline absolute right-0 top-2 h-10 z-50 text-xxs"
        onClick={() => {
          setUserType('coordenador IBM')
        }}
      >
        Trocar usuário
      </p>

      {/* Classes */}
      <H2 title="Classes" />

      <div className="classes space-y-2">
        <Card>
          <span className="text-base">1º AMS - FATEC</span>
          <span>2023</span>
        </Card>
        <Card>
          <span className="text-base">2º AMS - FATEC</span>
          <span>2023</span>
        </Card>
        <Card>
          <span className="text-base">3º AMS - FATEC</span>
          <span>2023</span>
        </Card>
      </div>

      <hr className="border-[#C6C6C6] my-6" />
    </main>
  )
}
