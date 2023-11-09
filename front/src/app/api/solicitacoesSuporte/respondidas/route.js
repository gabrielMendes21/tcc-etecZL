import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const coordinatorId = searchParams.get('coordinatorId')

  const { codEscola } = await prisma.usuario.findFirst({
    where: {
      id: Number(coordinatorId),
    },
    select: {
      codEscola: true,
    },
  })

  const requests = await prisma.solicitacaoSuporte.findMany({
    where: {
      aluno: {
        turma: {
          codEscola,
        },
      },
    },
    include: {
      Resposta: true,
      aluno: true,
    },
  })

  const answeredRequests = requests.filter((request) => request.Resposta)

  return NextResponse.json(answeredRequests)
}
