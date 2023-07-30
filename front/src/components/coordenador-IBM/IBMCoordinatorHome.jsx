'use client'

import UserInfo from '../UserInfo'
import { useContext } from 'react'
import { PageContext } from '@/app/context/PageContext'
import Card from '../Card'
import Dropdown from '../Dropdown'

export default function IBMCoordinatorHome() {
  const { setUserType } = useContext(PageContext)

  return (
    <main className="px-4 my-16">
      {/* Coordinator info */}
      <UserInfo name="Guilherme" status="Coordenador IBM" />

      <p
        className="underline absolute right-0 top-2 h-10 z-50 text-xxs"
        onClick={() => {
          setUserType('aluno')
        }}
      >
        Trocar usuário
      </p>

      {/* Schools */}
      {/* <H2 title="Escolas" /> */}
      <h2 className="text-base mt-5 mb-8">Escolas</h2>

      <Dropdown title="ETEC Zona Leste">
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
      </Dropdown>

      <Dropdown title="ETEC Americana">
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
      </Dropdown>
    </main>
  )
}
