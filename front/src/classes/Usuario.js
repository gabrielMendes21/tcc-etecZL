/* eslint-disable accessor-pairs */
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'

export default class Usuario {
  constructor() {
    this.codUsuario = 0
    this.email = ''
    this.senha = ''
    this.nome = ''
    this.turma = ''
    this.rm = 0
    this.horasConcluidas = 0
    this.horasAnuais = 0
    this.escola = 0
    this.tipoUsuario = ''
  }

  // Getters and setters
  set setCodUsuario(newValue) {
    this.codUsuario = newValue
  }

  get getCodUsuario() {
    return this.codUsuario
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

  set setNome(newValue) {
    this.nome = newValue
  }

  get getNome() {
    return this.nome
  }

  set setTurma(newValue) {
    this.turma = newValue
  }

  get getTurma() {
    return this.turma
  }

  set setRm(newValue) {
    this.rm = newValue
  }

  get getRm() {
    return this.rm
  }

  set setHorasConcluidas(newValue) {
    this.horasConcluidas = newValue
  }

  get setHorasConcluidas() {
    return this.horasConcluidas
  }

  set setHorasAnuais(newValue) {
    this.horasAnuais = newValue
  }

  get getHorasAnuais() {
    return this.horasAnuais
  }

  set setEscola(newValue) {
    this.escola = newValue
  }

  get getEscola() {
    return this.escola
  }

  set setTipoUsuario(newValue) {
    this.tipoUsuario = newValue
  }

  get getTipoUsuario() {
    return this.tipoUsuario
  }

  // Methods
  async fazerLogin(email, password) {
    // Get the params and search the user in database
    const user = await prisma.usuario.findFirst({
      where: {
        email,
      },
      include: {
        escolaRel: true,
      },
    })

    // Verify if the params are correct
    if (user) {
      if (password === user.senha) {
        // Fill class data with user information
        this.setCodUsuario = user.id
        this.setEmail = user.email
        this.setSenha = user.senha
        this.setNome = user.nome
        this.setTurma = user.turma
        this.setRm = user.rm
        this.setHorasConcluidas = user.horasConcluidas
        this.setHorasAnuais = user.horasAnuais
        this.setEscola = user.escola
        this.setTipoUsuario = user.tipoUsuario

        return true
      } else {
        return false
      }
    }

    return user
    // const userStudent = await prisma.aluno.findUnique({
    //   where: {
    //     email: this.email,
    //   },
    //   include: {
    //     escola: true,
    //   },
    // })

    // const userCoordinator = await prisma.coordenador.findUnique({
    //   where: {
    //     email: this.email,
    //   },
    //   include: {
    //     escola: true,
    //   },
    // })

    // if (userStudent) {
    //   if (userStudent.senha !== this.senha) {
    //     return 'Senha incorreta'
    //   } else {
    //     const token = jwt.sign(
    //       {
    //         nome: userStudent.nome,
    //         email: userStudent.email,
    //         horasAnuais: userStudent.horasAnuais,
    //         horasConcluidas: userStudent.horasConcluidas,
    //         turma: userStudent.turma,
    //         escola: userStudent.escola,
    //       },
    //       process.env.NEXT_PUBLIC_TOKENSECRET,
    //       {
    //         subject: userStudent.id.toString(),
    //         expiresIn: '7 days',
    //       },
    //     )

    //     return {
    //       token,
    //       user: userStudent,
    //     }
    //   }
    // } else if (userCoordinator) {
    //   if (userCoordinator.senha !== this.senha) {
    //     return 'Senha incorreta'
    //   } else {
    //     const token = jwt.sign(
    //       {
    //         nome: userCoordinator.nome,
    //         email: userCoordinator.email,
    //         tipoCoordenador: userCoordinator.tipoCoordenador,
    //         escola: userCoordinator.escola,
    //       },
    //       process.env.NEXT_PUBLIC_TOKENSECRET,
    //       {
    //         subject: userCoordinator.id.toString(),
    //         expiresIn: '7 days',
    //       },
    //     )

    //     return {
    //       token,
    //       user: userCoordinator,
    //     }
    //   }
    // } else {
    //   return 'Usuário não existe'
    // }
  }
}
