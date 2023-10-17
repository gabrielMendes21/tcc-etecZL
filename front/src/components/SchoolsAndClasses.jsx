import Link from 'next/link'
import Dropdown from './Dropdown'
import Card from './Card'
import { api } from '@/lib/api'

export default async function SchoolsAndClasses() {
  const schoolsResponse = await api.get('/escolas')
  const schools = schoolsResponse.data

  return schools.map((school) => {
    return (
      <Dropdown title={school.nomeEscola}>
        {school.Turma.map((turma) => {
          return (
            <Link href={`/coordenador-IBM/turma/${turma.id}`}>
              <Card>
                <span className="text-base">{turma.nomeTurma}</span>
                <span>{turma.ano}</span>
              </Card>
            </Link>
          )
        })}
      </Dropdown>
    )
  })
}
