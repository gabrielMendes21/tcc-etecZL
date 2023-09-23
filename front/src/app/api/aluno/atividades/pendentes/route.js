import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')

  const atividades = await prisma.alunoAtividade.findMany({
    where: {
      alunoId: Number(userId),
      AND: {
        entregue: false,
      },
    },

    include: {
      atividade: true,
    },
  })

  return NextResponse.json(atividades)
}
