import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const escolas = await prisma.escola.findMany()
  return NextResponse.json(escolas)
}
