"use client"

import logo from '../assets/logo-mobile.svg'
import { CheckCircle, Clock5 } from 'lucide-react'
import menu from '../assets/hamburger.svg'
import closeHamburger from '../assets/x.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const progress = 58

  const [ isOpen, setIsOpen ] = useState(false)
  const handleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className='w-full h-16 relative border-2 border-b-[#C6C6C6]'>
        <Image src={isOpen ? closeHamburger: menu} onClick={handleMenu} alt="" className='absolute top-1/2 -translate-y-1/2 left-5' />
        <Image src={logo} alt="logo" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </header>
      <main className='px-4 relative flex flex-col'>
        <h1 className='text-xl py-7'>Olá, Aluno!</h1>

        <hr className='border-[#C6C6C6]' />

        <h2 className='text-base mt-5 mb-8'>Cronograma de horas P-TECH</h2>

        <div className="cronograma space-y-5">
          <div className='flex gap-3 text-xs items-center'>
            <CheckCircle color='#24A148' strokeWidth={3} size={38} />
            <span>Pré-projeto 19/03/2022 (2 horas)</span>
          </div>
          <div className='flex gap-3 text-xs items-center'>
            <CheckCircle color='#24A148' strokeWidth={3} size={38} />
            <span>Diagramas do projeto 02/04/2023 (6 horas)</span>
          </div>
          <div className='flex gap-3 text-xs items-center'>
            <CheckCircle color='#24A148' strokeWidth={3} size={38} />
            <span>Monografia 05/06/2023 (4 horas)</span>
          </div>
          <div className='flex gap-3 text-xs items-center'>
            <Clock5 color='#C6C6C6' strokeWidth={3} size={38} />
            <span>Pitch de Apresentação 01/08/2023 (1 hora)</span>
          </div>
        </div>

        <div
          style={{
            "background-image": `conic-gradient(#0F62FE ${progress * 3.6}deg, #EDEDED 0deg)`
          }} 
          className="mt-14 self-center progress w-40 h-40 bg-red-500 rounded-[50%] flex flex-col items-center justify-center"
        >
          <span className='relative text-3xl font-semibold'>{progress}%</span>
          <span className='relative text-sm'>12/20.7 horas</span>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
