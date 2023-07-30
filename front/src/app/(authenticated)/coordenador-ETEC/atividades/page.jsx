import Delay from '@/components/LoadDelay'
import H1 from '@/components/H1'
import Dropdown from '@/components/Dropdown'
import Task from '@/components/Task'
import Link from 'next/link'

export default function Atividades() {
  return (
    <main className="px-4 my-16">
      <Delay>
        <H1 title="Atividades" />

        {/* Pending activities */}
        <Dropdown title="Pendentes">
          <Link href="/coordenador-ETEC/atividades/pitch">
            <Task name="Pitch de apresentação" hours={1} dueDate="19/05/2023" />
          </Link>
          <Task name="Cursos DIO" hours={1} dueDate="05/12/2023" />
        </Dropdown>

        {/* Past Activities */}
        <Dropdown title="Atividades passadas">
          <Task name="Pre-projeto" hours={2} dueDate="19/05/2023" />
          <Task name="Skills Build" hours={30} dueDate="25/06/2023" />
        </Dropdown>
      </Delay>
    </main>
  )
}
