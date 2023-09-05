'use client'

import Card from '../Card'
import UserInfo from '../UserInfo'
import Main from '../Main'
import Link from 'next/link'
import TradLink from '../Link'
import { useContext } from 'react'
import { PageContext } from '@/app/context/PageContext'

export default function ETECCoordinatorHome() {
  const { user } = useContext(PageContext)

  return (
    <Main>
      {/* Coordinator info */}
      <UserInfo name={user?.nome} status={user?.tipoCoordenador} />

      {/* Classes */}
      <h2 className="text-base py-7 md:text-2xl">Turmas</h2>
      <div className="classes space-y-2">
        <Link href="/coordenador-ETEC/turma/turma1">
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
      </div>

      <hr className="border-[#C6C6C6] mt-7" />

      {/* Support requests */}
      <h2 className="text-base py-7 md:text-2xl">Solicitações de suporte</h2>
      <div className="classes space-y-2">
        <Link href="/coordenador-ETEC/suporte/suporte1">
          <Card>
            <span className="text-base">Danilo Costa Rodrigues</span>
            <span>Horas não contabilizadas - 12/05/2023</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">Gabriel da Silva Mendes</span>
          <span>Reconsiderações - 08/05/2023</span>
        </Card>
        <Card>
          <span className="text-base">Andrei Luiz Florencio Matias</span>
          <span>Problemas no site - 09/05/2023</span>
        </Card>
      </div>

      {/* See more link */}
      <TradLink to="/coordenador-ETEC/suporte" size={10}>
        Ver mais
      </TradLink>
    </Main>
  )
}
