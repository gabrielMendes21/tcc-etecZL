'use client'

import Report from '@/components/Report'
import StudentInfo from '@/components/StudentInfo'
import { api } from '@/lib/api'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Relatorio() {
  const [students, setStudents] = useState()

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
        setStudents(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="mt-8">
      {students?.map((student) => {
        return (
          <>
            <div className="flex justify-between">
              {/* student info */}
              <StudentInfo
                student={student}
                school={student.turma.escola.nomeEscola}
              />
              {/* Report */}
              <Report student={student} key={student.id} />
            </div>
            <hr className="my-6" />
          </>
        )
      })}
    </div>
  )
}
