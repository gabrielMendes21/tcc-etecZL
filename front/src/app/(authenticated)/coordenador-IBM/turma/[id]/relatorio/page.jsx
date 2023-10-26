'use client'

import Main from '@/components/Main'
import Report from '@/components/Report'
import StudentInfo from '@/components/StudentInfo'
import { api } from '@/lib/api'
import { FileBarChart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Relatorio() {
  const [classData, setClassData] = useState({})

  const pathname = usePathname()
  const segments = pathname.split('/')

  const classId = Number(segments[segments.length - 2])

  useEffect(() => {
    api
      .get('/turmas/relatorio', {
        params: {
          classId,
        },
      })
      .then((response) => {
        setClassData(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <Main>
      <Link
        href="#"
        className="bg-red-700 inline-flex p-3 gap-3 items-center text-white hover:brightness-110 transition-all mt-8"
      >
        Gerar PDF
        <FileBarChart size={20} />
      </Link>
      <div className="mt-8">
        {classData.Usuario?.map((student) => {
          return (
            <>
              <div className="flex justify-between">
                {/* student info */}
                <StudentInfo
                  student={student}
                  key={student.id}
                  school={classData.escola.nomeEscola}
                />
                {/* Report */}
                <Report student={student} key={student.id} />
              </div>
              <hr className="my-6" />
            </>
          )
        })}
      </div>
    </Main>
  )
}
