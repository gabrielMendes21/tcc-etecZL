/* eslint-disable accessor-pairs */
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'

export default class Usuario {
  constructor() {
    this.email = ''
    this.senha = ''
    this.nome = ''
  }

  set setEmail(newValue) {
    this.email = newValue
  }

  get getEmail() {
    return this.email
  }

  set setSenha(newValue) {
    this.senha = newValue
  }

  get getSenha() {
    return this.senha
  }

  set getNome(newValue) {
    this.nome = newValue
  }

  get setNome() {
    return this.nome
  }

  async fazerLogin() {
    const userStudent = await prisma.aluno.findUnique({
      where: {
        email: this.email,
      },
      include: {
        escola: true,
      },
    })

    const userCoordinator = await prisma.coordenador.findUnique({
      where: {
        email: this.email,
      },
      include: {
        escola: true,
      },
    })

    if (userStudent) {
      if (userStudent.senha !== this.senha) {
        return 'Senha incorreta'
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

        return {
          token,
          user: userStudent,
        }
      }
    } else if (userCoordinator) {
      if (userCoordinator.senha !== this.senha) {
        return 'Senha incorreta'
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

        return {
          token,
          user: userCoordinator,
        }
      }
    } else {
      return 'Usuário não existe'
    }
  }
}
