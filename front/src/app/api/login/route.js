import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

// Get the user JWT
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  try {
    const user = jwt.verify(token, process.env.NEXT_PUBLIC_TOKENSECRET)
    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 401 })
  }
}

// Create a new login session
export async function POST(req) {
  const body = await req.json()
  const { email, senha } = body

  const userStudent = await prisma.aluno.findUnique({
    where: {
      email,
    },
    include: {
      escola: true,
    },
  })

  const userCoordinator = await prisma.coordenador.findUnique({
    where: {
      email,
    },
    include: {
      escola: true,
    },
  })

  if (userStudent) {
    if (userStudent.senha !== senha) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 400 })
    } else {
      const token = jwt.sign(
        {
          nome: userStudent.nome,
          email: userStudent.email,
          horasAnuais: userStudent.horasAnuais,
          horasConcluidas: userStudent.horasConcluidas,
          turma: userStudent.turma,
          escola: userStudent.escola,
        },
        process.env.NEXT_PUBLIC_TOKENSECRET,
        {
          subject: userStudent.id.toString(),
          expiresIn: '7 days',
        },
      )

      return NextResponse.json({
        token,
        user: userStudent,
      })
    }
  } else if (userCoordinator) {
    if (userCoordinator.senha !== senha) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 400 })
    } else {
      const token = jwt.sign(
        {
          nome: userCoordinator.nome,
          email: userCoordinator.email,
          tipoCoordenador: userCoordinator.tipoCoordenador,
          escola: userCoordinator.escola,
        },
        process.env.NEXT_PUBLIC_TOKENSECRET,
        {
          subject: userCoordinator.id.toString(),
          expiresIn: '7 days',
        },
      )

      return NextResponse.json({
        token,
        user: userCoordinator,
      })
    }
  } else {
    return NextResponse.json({ error: 'Usuário não existe' }, { status: 400 })
  }
}
