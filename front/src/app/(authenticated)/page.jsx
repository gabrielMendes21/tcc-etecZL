'use client'
import { useContext } from 'react'
import ETECCoordinatorHome from '@/components/coordenador-ETEC/ETECCoordinatorHome'
import IBMCoordinatorHome from '@/components/coordenador-IBM/IBMCoordinatorHome'
import StudentHome from '@/components/aluno/StudentHome'

import { PageContext } from '../context/PageContext'

export default function Home() {
  // useEffect(() => router.push('/dashboard'), [router])
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
