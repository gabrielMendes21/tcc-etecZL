import prisma from '@lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const atividades = await prisma.alunoAtividade.findMany()

  return NextResponse.json(atividades)
}
