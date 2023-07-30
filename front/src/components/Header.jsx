'use client'

import menu from '../assets/hamburger.svg'
import closeHamburger from '../assets/x.svg'
import Image from 'next/image'
import darkLogo from '../assets/dark-logo.svg'
import Link from 'next/link'
import { PageContext } from '@/app/context/PageContext'
import { useContext } from 'react'

function Menu() {
  const { isOpen, setIsOpen, userType, handleMenu } = useContext(PageContext)

  return userType === 'aluno' ? (
    <>
      <Image
        src={isOpen ? closeHamburger : menu}
        onClick={handleMenu}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
      />
      <nav
        className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:static md:bg-transparent md:h-auto md:w-auto md:p-0 ${
          isOpen ? `left-0` : `-left-full`
        }`}
      >
        <ul className="space-y-5 md:space-y-0 md:flex md:items-center md:gap-16">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/">Minhas horas</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/aluno/atividades">Atividades</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/aluno/reclamacoes">Reclamações</Link>
          </li>
          {/* <li onClick={() => setIsOpen(false)}>
            <Link href="/aluno/meu-perfil">Meu perfil</Link>
          </li> */}
        </ul>
      </nav>
    </>
  ) : userType === 'coordenador ETEC' ? (
    <>
      <Image
        src={isOpen ? closeHamburger : menu}
        onClick={handleMenu}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
      />
      <nav
        // style={style}
        className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:invisible md:h-auto md:w-auto md:px-0 ${
          isOpen ? `left-0` : `-left-full`
        }`}
      >
        <ul className="space-y-5 md:flex">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/">Classes</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/coordenador-ETEC/atividades">Atividades</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/coordenador-ETEC/reclamacoes">Reclamações</Link>
          </li>
          {/* <li onClick={() => setIsOpen(false)}>
            <Link href="/aluno/meu-perfil">Meu perfil</Link>
          </li> */}
        </ul>
      </nav>
    </>
  ) : userType === 'coordenador IBM' ? (
    <>
      <Image
        src={isOpen ? closeHamburger : menu}
        onClick={handleMenu}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
      />
      <nav
        // style={style}
        className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:invisible ${
          isOpen ? `left-0` : `-left-full`
        }`}
      >
        <ul className="space-y-5">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/">Classes</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/coordenador-IBM/atividades">Atividades</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/coordenador-IBM/reclamacoes">Reclamações</Link>
          </li>
          {/* <li onClick={() => setIsOpen(false)}>
            <Link href="/aluno/meu-perfil">Meu perfil</Link>
          </li> */}
        </ul>
      </nav>
    </>
  ) : (
    'Usuário inválido'
  )
}

export default function Header({ hasMenu }) {
  const { setIsOpen } = useContext(PageContext)

  return (
    <header className="w-full h-16 fixed top-0 z-10 bg-white border-b-2 border-b-[#C6C6C6] md:flex md:flex-row-reverse md:justify-around md:items-center md:h-20">
      {/* Menu with hamburger */}
      {hasMenu && <Menu />}

      {/* Easy hours logo */}
      <Link
        href="/"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:-translate-x-0 md:-translate-y-0"
      >
        <Image
          src={darkLogo}
          onClick={() => setIsOpen(false)}
          alt="logo"
          priority
          className="md:w-[200px]"
        />
      </Link>
    </header>
  )
}
