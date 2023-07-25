'use client'

import { createContext, useState } from 'react'

export const MenuContext = createContext({})

export function MenuContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => setIsOpen(!isOpen)

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, handleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
