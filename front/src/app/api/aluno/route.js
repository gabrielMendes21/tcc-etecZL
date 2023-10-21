import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')

  const student = await prisma.usuario.findFirst({
    where: {
      id: Number(userId),
    },
    include: {
      Horas: {
        where: {
          ano: new Date().getFullYear(),
        },
      },
    },
  })

  return NextResponse.json(student)
}

export async function POST(req) {
  // Get data from the form
  const student = await req.json()

  // Get class and school id passed by query params
  const { searchParams } = new URL(req.url)
  const classId = searchParams.get('class')
  const schoolId = searchParams.get('school')

  await prisma.usuario.create({
    data: {
      nome: student.nome,
      email: student.email,
      rm: Number(student.rm),
      senha: student.rm + student.nome.slice(0, 2),
      codEscola: Number(schoolId),
      codTipoUsuario: 1,
      codTurma: Number(classId),

      Horas: {
        create: {
          horasAnuais: Number(student.horasAnuais),
          horasConcluidas: Number(student.horasConcluidas) ?? 0,
          ano: new Date().getFullYear(),
        },
      },
    },
  })

  return NextResponse.json('Cadastrado')
}
