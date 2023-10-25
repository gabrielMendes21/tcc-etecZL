import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function GET() {
  const students = await prisma.usuario.findMany({
    where: {
      codTipoUsuario: 1,
    },
  })

  return NextResponse.json(students)
}

export async function POST(req) {
  const { searchParams } = new URL(req.url)
  const schoolId = searchParams.get('school')
  const classId = searchParams.get('class')

  const students = await req.json()

  for (let i = 0; i < students.length; i++) {
    const studentResponse = await prisma.usuario.findFirst({
      where: {
        rm: students[i].RM,
      },
    })

    const password = students[i].RM + students[i].NOME.slice(0, 2)
    const hashedPassowrd = await bcrypt.hash(password, 10)

    if (studentResponse === null) {
      await prisma.usuario.create({
        data: {
          email: students[i].EMAIL,
          rm: students[i].RM,
          nome: students[i].NOME,
          senha: hashedPassowrd,
          codEscola: Number(schoolId),
          codTipoUsuario: 1,
          codTurma: Number(classId),

          Horas: {
            create: {
              horasAnuais: students[i]['HORAS ANUAIS'],
              horasConcluidas: students[i]['HORAS CONCLUÍDAS'],
              ano: new Date().getFullYear(),
            },
          },
        },
      })
    }
  }

  return NextResponse.json('Cadastrados')
}
