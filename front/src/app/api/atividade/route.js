import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const taskId = searchParams.get('taskId')

  const task = await prisma.atividade.findFirst({
    where: {
      id: taskId,
    },
  })

  return NextResponse.json(task)
}
