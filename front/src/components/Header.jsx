'use client'

import menu from '../assets/hamburger.svg'
import closeHamburger from '../assets/x.svg'
import Image from 'next/image'
import darkLogo from '../assets/dark-logo.svg'
import Link from 'next/link'
import { MenuContext } from '@/app/context/MenuContext'
import { useContext } from 'react'
import Delay from './LoadDelay'

function SideBar({ style }) {
  const { setIsOpen } = useContext(MenuContext)

  return (
    // Menu items
    <nav
      style={style}
      className="fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen"
    >
      <ul className="space-y-5">
        <li onClick={() => setIsOpen(false)}>
          <Link href="/">Minhas horas</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/atividades">Atividades</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/reclamacoes">Reclamações</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/profile">Meu perfil</Link>
        </li>
      </ul>
    </nav>
  )
}

export default function Header({ hasMenu }) {
  const { isOpen, setIsOpen, handleMenu } = useContext(MenuContext)

  return (
    <Delay>
      <header className="w-full h-16 fixed top-0 z-10 bg-white border-b-2 border-b-[#C6C6C6]">
        {/* Hamburger */}
        {hasMenu && (
          <Image
            src={isOpen ? closeHamburger : menu}
            onClick={() => handleMenu()}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-5"
          />
        )}

        <SideBar
          style={{
            left: isOpen ? '0' : '-100%',
          }}
        />

        {/* Easy hours logo */}
        <Link href="/">
          <Image
            src={darkLogo}
            onClick={() => setIsOpen(false)}
            alt="logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </Link>
      </header>
    </Delay>
  )
}
