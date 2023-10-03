/* eslint-disable accessor-pairs */
import prisma from '@/lib/prisma'

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
  }
}
