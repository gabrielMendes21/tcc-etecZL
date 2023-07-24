"use client"

import menu from '../assets/hamburger.svg'
import closeHamburger from '../assets/x.svg'
import Image from 'next/image'
import logo from '../assets/logo-mobile.svg'
import { useState } from 'react'
import SideBar from './Sidebar'

export default function Header({ hasMenu }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)

    return (
        <header className='w-full h-16 relative border-b-2 border-b-[#C6C6C6]'>
            {
                hasMenu && <Image src={isOpen ? closeHamburger : menu} onClick={handleMenu} alt="" className='absolute top-1/2 -translate-y-1/2 left-5' />
            }
            <SideBar style={{
                position: "absolute",
                "z-index": "1",
                top: "100%",
                left: isOpen ? "0" : "-100%",
                "transition": ".3s",
            
                padding: "2.1875rem 1.5625rem",
                backgroundColor: "#FFF",
                height: "100vh",
            }} />
            <Image src={logo} alt="logo" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </header>
    )
}