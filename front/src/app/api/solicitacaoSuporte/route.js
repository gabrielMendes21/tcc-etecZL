import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const supportRequestId = searchParams.get('id')

  const supportRequest = await prisma.solicitacaoSuporte.findFirst({
    where: {
      id: Number(supportRequestId),
    },
    include: {
      Resposta: true,
    },
  })

  return NextResponse.json(supportRequest)
}