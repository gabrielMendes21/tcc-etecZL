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
