'use client'
import ETECCoordinatorHome from '@/components/coordenador-ETEC/ETECCoordinatorHome'
import IBMCoordinatorHome from '@/components/coordenador-IBM/IBMCoordinatorHome'
import StudentHome from '@/components/aluno/StudentHome'

export default function Home() {
  const userType = 'aluno'

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
