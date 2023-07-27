'use client'

import ETECCoordinatorHome from '@/components/ETECcoordinator/ETECCoordinatorHome'
import IBMCoordinatorHome from '@/components/IBMcoordinator/IBMCoordinatorHome'
import StudentHome from '@/components/student/StudentHome'
import { useContext } from 'react'
import { PageContext } from '../context/PageContext'

export default function Home() {
  const { userType } = useContext(PageContext)

  return userType === 'aluno' ? (
    <StudentHome />
  ) : userType === 'coordenador ETEC' ? (
    <ETECCoordinatorHome />
  ) : userType === 'coordenador IBM' ? (
    <IBMCoordinatorHome />
  ) : (
    'Usuário inválido'
  )
}
