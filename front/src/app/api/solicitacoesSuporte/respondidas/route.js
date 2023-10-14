import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const requests = await prisma.solicitacaoSuporte.findMany({
    include: {
      Resposta: true,
      aluno: true,
    },
  })

  const answeredRequests = requests.filter((request) => request.Resposta)

  return NextResponse.json(answeredRequests)
}
