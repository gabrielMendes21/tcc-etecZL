'use client'
import ETECCoordinatorHome from '@/components/coordenador-ETEC/ETECCoordinatorHome'
import IBMCoordinatorHome from '@/components/coordenador-IBM/IBMCoordinatorHome'
import StudentHome from '@/components/aluno/StudentHome'
import { useContext, useState } from 'react'
import { PageContext } from '../context/PageContext'

export default function Home() {
  const { user } = useContext(PageContext)
  // const { userType, setUserType } = useState('')
  let userType = ''

  if (user?.tipoCoordenador) {
    // setUserType(user?.tipoCoordenador)
    userType = user?.tipoCoordenador
  } else {
    // setUserType('Aluno')
    userType = 'Aluno'
  }

  return userType === 'Aluno' ? (
    <StudentHome />
  ) : userType === 'Coordenador ETEC' ? (
    <ETECCoordinatorHome />
  ) : userType === 'Coordenador IBM' ? (
    <IBMCoordinatorHome />
  ) : (
    'Usuário inválido'
  )
}
