import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')

  const student = await prisma.usuario.findFirst({
    where: {
      id: Number(userId),
    },
  })

  return NextResponse.json(student)
}
