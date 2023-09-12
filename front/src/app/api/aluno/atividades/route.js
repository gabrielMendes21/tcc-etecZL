import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

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
