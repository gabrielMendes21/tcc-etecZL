'use client'

import Image from 'next/image'
import darkLogo from '../assets/dark-logo.svg'
import Link from 'next/link'
import { useState } from 'react'
import { Drawer, IconButton, Box } from '@mui/material'
import { MenuIcon } from 'lucide-react'

function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div>
      <div className="md:invisible absolute top-1/2 -translate-y-1/2 left-5">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            p={2}
            width="250px"
            role="presentation"
            className="grid place-items-center"
          >
            <nav>
              <ul className="space-y-5 md:space-y-0 md:flex md:items-center md:gap-16">
                <li>
                  <Link href="/">Minhas horas</Link>
                </li>
                <li>
                  <Link href="/aluno/atividades">Atividades</Link>
                </li>
                <li>
                  <Link href="/aluno/suporte">Suporte</Link>
                </li>
              </ul>
            </nav>
          </Box>
        </Drawer>
      </div>

      <nav className="invisible absolute md:static md:visible md:bg-transparent md:h-auto md:w-auto md:p-0">
        <ul className="space-y-5 md:space-y-0 md:flex md:items-center md:gap-16">
          <li>
            <Link href="/">Minhas horas</Link>
          </li>
          <li>
            <Link href="/aluno/atividades">Atividades</Link>
          </li>
          <li>
            <Link href="/aluno/suporte">Suporte</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// function Menu() {
//   return userType === 'aluno' ? ( // Student header
//     <>
//       {/* Logo */}
//       <Image
//         src={isOpen ? closeHamburger : menu}
//         onClick={handleMenu}
//         alt=""
//         className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
//       />
//       {/* Navigation */}
//       <nav
//         className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:static md:bg-transparent md:h-auto md:w-auto md:p-0 ${
//           isOpen ? `left-0` : `-left-[1000px]`
//         }`}
//       >
//       </nav>
//     </>
//   ) : userType === 'coordenador ETEC' ? ( // ETEC Coordinator header
//     <>
//       {/* Logo */}
//       <Image
//         src={isOpen ? closeHamburger : menu}
//         onClick={handleMenu}
//         alt=""
//         className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
//       />
//       {/* Navigation */}
//       <nav
//         className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:static md:bg-transparent md:h-auto md:w-auto md:p-0 ${
//           isOpen ? `left-0` : `-left-full`
//         }`}
//       >
//         <ul className="space-y-5 md:space-y-0 md:flex md:items-center md:gap-16">
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/">Turmas</Link>
//           </li>
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-ETEC/atividades">Atividades</Link>
//           </li>
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-ETEC/suporte">Suporte</Link>
//           </li>
//           {/* <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-ETEC/meu-perfil">Meu perfil</Link>
//           </li> */}
//         </ul>
//       </nav>
//     </>
//   ) : userType === 'coordenador IBM' ? ( // IBM Coordinator header
//     <>
//       {/* Logo */}
//       <Image
//         src={isOpen ? closeHamburger : menu}
//         onClick={handleMenu}
//         alt=""
//         className="absolute top-1/2 -translate-y-1/2 left-5 md:invisible"
//       />
//       {/* Navigation */}
//       <nav
//         className={`fixed z-10 top-16 transition-all py-9 px-6 bg-white h-screen w-screen md:static md:bg-transparent md:h-auto md:w-auto md:p-0 ${
//           isOpen ? `left-0` : `-left-full`
//         }`}
//       >
//         <ul className="space-y-5 md:space-y-0 md:flex md:items-center md:gap-16">
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/">Turmas</Link>
//           </li>
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-IBM/atividades">Atividades</Link>
//           </li>
//           <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-IBM/suporte">Suporte</Link>
//           </li>
//           {/* <li onClick={() => setIsOpen(false)}>
//             <Link href="/coordenador-IBM/meu-perfil">Meu perfil</Link>
//           </li> */}
//         </ul>
//       </nav>
//     </>
//   ) : (
//     ''
//   )
// }

export default function Header({ hasMenu, className }) {
  return (
    <header
      className={`w-full h-16 fixed top-0 z-10 bg-white border-b-2 border-b-[#C6C6C6] md:flex md:flex-row-reverse md:justify-around md:items-center md:h-20 ${className}`}
    >
      {/* Menu with hamburger */}
      {hasMenu && <Nav />}

      {/* Menu with no hamburguer */}
      {/* logo */}
      <Link
        href="/"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:-translate-x-0 md:-translate-y-0"
      >
        <Image
          src={darkLogo}
          // onClick={() => setIsOpen(false)}
          alt="logo"
          priority
          className="md:w-[200px]"
        />
      </Link>
    </header>
  )
}
