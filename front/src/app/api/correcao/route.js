import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.json()
  const { searchParams } = new URL(req.url)
  const taskDeliveryId = searchParams.get('taskDeliveryId')
  const coordinatorId = searchParams.get('coordinatorId')

  await prisma.correcao.create({
    data: {
      codEntrega: Number(taskDeliveryId),
      conteudo: data.assessment,
      codCoordenador: Number(coordinatorId),
    },
  })

  const isApproved = data.taskVal === 'approve'
  console.log(taskDeliveryId)

  // await prisma.entrega.update({
  //   data: {
  //     aprovada: !!isApproved,
  //   },
  //   where: {
  //     id: Number(taskDeliveryId),
  //   },
  // })

  return NextResponse.json('Sucesso')
}
