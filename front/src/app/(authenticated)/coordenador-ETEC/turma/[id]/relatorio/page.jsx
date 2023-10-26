'use client'

import Main from "@/components/Main";
import StudentInfo from "@/components/StudentInfo";
import { api } from "@/lib/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Relatorio() {
    const [classData, setClassData] = useState({})

    const pathname = usePathname()
    const segments = pathname.split("/")

    const classId = Number(segments[segments.length - 2])

    useEffect(() => {
        api.get('/turmas/relatorio', {
            params: {
                classId
            }
        }).then(response => {
            setClassData(response.data)
            console.log(response.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    return (
        <Main>
            <div className="mt-8">
                {
                    classData.Usuario?.map(student => {
                        return <StudentInfo student={student} key={student.id} school={classData.escola.nomeEscola} />
                    })
                }
            </div>
        </Main>
    )
}