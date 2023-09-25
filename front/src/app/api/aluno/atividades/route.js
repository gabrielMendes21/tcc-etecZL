import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')

  const atividades = await prisma.entrega.findMany({
    where: {
      alunoId: Number(userId),
    },

    include: {
      atividade: true,
    },
  })

  return NextResponse.json(atividades)
}
