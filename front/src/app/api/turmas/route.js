import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const classes = await prisma.turma.findMany()

  return NextResponse.json(classes)
}
