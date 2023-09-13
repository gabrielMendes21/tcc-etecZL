import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const atividades = await prisma.alunoAtividade.findMany()

  return NextResponse.json(atividades)
}
