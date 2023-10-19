import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const students = await prisma.usuario.findMany({
    where: {
      codTipoUsuario: 1,
    },
  })

  return NextResponse.json(students)
}

export async function POST(req) {
  const students = await req.json()

  for (let i = 0; i < students.length; i++) {
    const studentResponse = await prisma.usuario.findFirst({
      where: {
        rm: students[i].RM,
      },
    })

    if (studentResponse === null) {
      await prisma.usuario.create({
        data: {
          email: students[i].Email,
          rm: students[i].RM,
          nome: students[i].Nome,
          senha: students[i].RM + students[i].Nome.slice(0, 2),
          codEscola: 1,
          codTipoUsuario: 1,
          codTurma: 1,
          horasAnuais: 0,
          horasConcluidas: 0,
        },
      })
    }
  }

  return NextResponse.json('Cadastrados')
}
