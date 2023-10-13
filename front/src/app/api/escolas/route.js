import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const turmas = await prisma.turma.findMany()
  return NextResponse.json(turmas)
}
