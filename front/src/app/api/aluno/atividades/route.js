import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const atividades = await prisma.alunoAtividade.findMany({
    where: {
      alunoId: 22302,
    },
  })

  return NextResponse.json(atividades)
}
