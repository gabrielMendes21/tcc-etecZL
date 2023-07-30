import H1 from '@/components/H1'
import Dropdown from '@/components/Dropdown'
import Card from '@/components/Card'
import Link from 'next/link'
import Task from '@/components/Task'
import Main from '@/components/Main'

export default function Atividades() {
  return (
    <Main>
      <H1 title="Atividades" />

      {/* Sent Activities */}
      <Dropdown title="Entregues">
        <Task name="Pitch de apresentação" hours={1} dueDate="19/05/2023" />
        <Task name="Cursos DIO" hours={1} dueDate="05/12/2023" />
      </Dropdown>

      {/* Pending Activities */}
      <Dropdown title="Pendentes">
        <Link href="/aluno/atividades/pre-projeto" className="block mb-5">
          <Task name="Pre-projeto" hours={2} dueDate="19/05/2023" />
        </Link>
        <Task name="Skills Build" hours={30} dueDate="25/06/2023" />
      </Dropdown>

      {/* Overdue Activities */}
      <Dropdown title="Não entregues">
        <Card>
          <span className="text-base col-span-1/2">Pitch de apresentação</span>
          <span>19/05/2023</span>
        </Card>
        <Card>
          <span className="text-base col-span-1/2">Cursos DIO</span>
          <span>05/12/2023</span>
        </Card>
      </Dropdown>
    </Main>
  )
}
