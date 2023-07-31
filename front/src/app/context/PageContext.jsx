'use client'

import { createContext, useState } from 'react'

export const PageContext = createContext({})

export function PageContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState('aluno')
  const handleMenu = () => setIsOpen(!isOpen)

  // const userType = 'aluno'
  // const userType = 'coordenador ETEC'
  // const userType = 'coordenador IBM'

  return (
    <PageContext.Provider
      value={{ isOpen, setIsOpen, handleMenu, userType, setUserType }}
    >
      {children}
    </PageContext.Provider>
  )
}