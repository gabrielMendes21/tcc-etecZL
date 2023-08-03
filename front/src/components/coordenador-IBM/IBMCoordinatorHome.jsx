'use client'

import UserInfo from '../UserInfo'
import { useContext } from 'react'
import { PageContext } from '@/app/context/PageContext'
import Card from '../Card'
import Dropdown from '../Dropdown'
import Main from '../Main'
import Link from 'next/link'

export default function IBMCoordinatorHome() {
  const { setUserType } = useContext(PageContext)

  return (
    <Main>
      {/* Coordinator info */}
      <UserInfo name="Guilherme" status="Coordenador IBM" />

      <p
        className="underline absolute right-0 top-2 h-10 z-50 text-xxs hover:cursor-pointer"
        onClick={() => {
          setUserType('aluno')
        }}
      >
        Trocar usuário
      </p>

      {/* Schools */}
      {/* <H2 title="Escolas" /> */}
      <h2 className="text-base md:text-2xl mt-5 mb-8">Escolas</h2>

      <Dropdown title="ETEC Zona Leste">
        <Link href="/coordenador-IBM/classe/classe1">
          <Card>
            <span className="text-base">1º AMS - FATEC</span>
            <span>2023</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">2º AMS - FATEC</span>
          <span>2023</span>
        </Card>
        <Card>
          <span className="text-base">3º AMS - FATEC</span>
          <span>2023</span>
        </Card>
      </Dropdown>

      <Dropdown title="Etec Polivalente de Americana">
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
    </Main>
  )
}
