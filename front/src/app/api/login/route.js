import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient({
  log: ['error', 'query'],
})

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
      return NextResponse.json({
        token: undefined,
        message: 'Senha incorreta',
      })
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
          expiresIn: '1 day',
        },
      )

      return NextResponse.json({
        token,
        message: 'token gerado',
      })
    }
  } else if (userCoordinator) {
    if (userCoordinator.senha !== senha) {
      return NextResponse({
        token: undefined,
        message: 'Senha incorreta',
      })
    } else {
      const token = jwt.sign(
        {
          nome: userCoordinator.nome,
          email: userCoordinator.email,
          tipoCoordenador: userCoordinator.tipoCoordenador,
          escola: userCoordinator.escola,
        },
        {
          sub: userCoordinator.id.toString(),
          expiresIn: '1 day',
        },
      )

      return NextResponse.json(token)
    }
  } else {
    return {
      token: undefined,
      message: 'Usuário não existe',
    }
  }
}
