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

  for (let student of students) {
    const studentResponse = await prisma.usuario.findFirst({
      where: {
        rm: student.RM
      }
    })

    console.log(studentResponse)
  }

  return NextResponse.json(students)
}
