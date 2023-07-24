"use client"

import menu from '../assets/hamburger.svg'
import closeHamburger from '../assets/x.svg'
import Image from 'next/image'
import darkLogo from '../assets/dark-logo.svg'
import { useState } from 'react'
import SideBar from './Sidebar'
import Link from "next/link"

export default function Header({ hasMenu }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)

    return (
        <header className='w-full h-16 fixed top-0 z-10 bg-white border-b-2 border-b-[#C6C6C6]'>
            {
                hasMenu && <Image src={isOpen ? closeHamburger : menu} onClick={handleMenu} alt="" className='absolute top-1/2 -translate-y-1/2 left-5' />
            }
            <SideBar style={{
                left: isOpen ? "0" : "-100%",
            }} />
            <Link href="/">
                <Image src={darkLogo} alt="logo" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </Link>
        </header>
    )
}