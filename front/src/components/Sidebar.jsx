import Link from "next/link"

export default function SideBar({ style }) {
    return (
        <nav style={style} className="absolute z-10 top-full transition-all py-9 px-6 bg-white h-screen w-screen" >
            <ul className="space-y-5">
                <li><Link href="/">Minhas horas</Link></li>
                <li><Link href="/">Atividades</Link></li>
                <li><Link href="/">Reclamações</Link></li>
                <li><Link href="/">Meu perfil</Link></li>
            </ul>
        </nav>
    )
}