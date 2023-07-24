export default function SideBar({ style }) {
    return (
        <nav style={style}>
            <ul className="space-y-5">
                <li>Minhas horas</li>
                <li>Atividades</li>
                <li>Reclamações</li>
                <li>Meu perfil</li>
            </ul>
        </nav>
    )
}