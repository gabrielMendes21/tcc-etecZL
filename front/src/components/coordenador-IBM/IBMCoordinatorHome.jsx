'use client'

import UserInfo from '../UserInfo'
import { useContext } from 'react'
import { PageContext } from '@/app/context/PageContext'

export default function IBMCoordinatorHome() {
  const { setUserType } = useContext(PageContext)

  return (
    <main className="px-4 my-16">
      {/* Coordinator info */}
      <UserInfo name="Guilherme" status="CoordenadorIBM" />

      <p
        className="underline absolute right-0 top-2 h-10 z-50 text-xxs"
        onClick={() => {
          setUserType('aluno')
        }}
      >
        Trocar usuário
      </p>
    </main>
  )
}
