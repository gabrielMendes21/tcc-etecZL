/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  await prisma.tipoUsuario.createMany({
    data: [
      {
        tipoUsuario: 'Aluno',
      },
      {
        tipoUsuario: 'Coordenador ETEC',
      },
      {
        tipoUsuario: 'Coordenador IBM',
      },
    ],
  })

  await prisma.tipoAtividade.createMany({
    data: [
      {
        tipoAtividade: 'Sessão',
      },
      {
        tipoAtividade: 'Tarefa',
      },
    ],
  })

  await prisma.usuario.create({
    data: {
      email: 'guilherme@email.com',
      senha: '111111',
      nome: 'Guilherme',
      codTipoUsuario: 3,
    },
  })

  await prisma.escola.create({
    data: {
      nomeEscola: 'ETEC Zona Leste',
      Turma: {
        create: {
          ano: 2023,
          nomeTurma: '3º DS AMS',
          Usuario: {
            create: [
              {
                email: 'gabriel.mendes88@etec.sp.gov.br',
                senha: '123456',
                nome: 'Gabriel da Silva Mendes',
                rm: 22302,
                horasConcluidas: 50,
                horasAnuais: 120,
                codTipoUsuario: 1,
              },
              {
                email: 'danilo.rodrigues108@etec.sp.gov.br',
                senha: '654321',
                nome: 'Danilo Costa Rodrigues',
                rm: 22388,
                horasConcluidas: 69,
                horasAnuais: 120,
                codTipoUsuario: 1,
              },
            ],
          },
        },
      },
      Usuario: {
        create: {
          email: 'rogerio.costa3@etec.sp.gov.br',
          senha: '987654',
          nome: 'Rogério Bezerra Costa',
          codTipoUsuario: 2,
        },
      },
    },
  })

  await prisma.atividade.createMany({
    data: [
      {
        titulo: 'Design Thinking',
        descricao:
          'Fale sobre o que você aprendeu na última sessão de Design Thinking',
        horasAtividade: 2,
        prazoEntrega: '2023-11-10T10:00:00.000Z',
        codTipoAtividade: 1,
      },
      {
        titulo: 'Horas flexíveis',
        descricao: 'Anexe as horas flexíveis',
        horasAtividade: 20,
        prazoEntrega: '2023-10-18T10:00:00.000Z',
        codTipoAtividade: 2,
      },
      {
        titulo: 'Sessão',
        descricao: 'Fale sobre o que você aprendeu na última sessão',
        horasAtividade: 2,
        prazoEntrega: '2023-09-05T10:00:00.000Z',
        codTipoAtividade: 1,
      },
      {
        titulo: 'IBM Skills Build',
        descricao:
          'Anexe os prints dos seus cursos na plataforma IBM Skills Build',
        horasAtividade: 40,
        prazoEntrega: '2023-10-07T10:00:00.000Z',
        codTipoAtividade: 2,
      },
    ],
  })

  await prisma.entrega.createMany({
    data: [
      {
        dataEntrega: '2023-11-02T04:00:00.000Z',
        conteudo: 'Aprendi bastante coisa.',
        entregue: true,
        codAluno: 2,
        codAtividade: 1,
      },
      {
        entregue: false,
        codAluno: 2,
        codAtividade: 3,
      },
      {
        entregue: false,
        codAluno: 2,
        codAtividade: 2,
      },
      {
        entregue: false,
        codAluno: 3,
        codAtividade: 1,
      },
      {
        dataEntrega: '2023-10-09T09:00:00.000Z',
        conteudo: 'Anexado.',
        entregue: true,
        codAluno: 3,
        codAtividade: 2,
      },
    ],
  })

  await prisma.correcao.createMany({
    data: [
      {
        codCoordenador: 1,
        codEntrega: 1,
        conteudo: 'Meus parabéns.',
      },
      {
        codCoordenador: 1,
        codEntrega: 4,
        conteudo: 'Sem palavras!',
      },
    ],
  })

  await prisma.solicitacaoSuporte.createMany({
    data: [
      {
        titulo: 'Contabilização de horas',
        conteudo:
          'Boa tarde. Minhas horas não foram contabilizadas, mas eu realizei todas as atividades propostas, tanto que eu não possuo nenhuma atividade pendente.',
        codAluno: 2,
      },
      {
        titulo: 'Problema com entrega de atividade',
        conteudo:
          'Bom dia. Não estou conseguindo entregar a minha atividade, e eu tenho apenas 2 hroas até o fechamento da mesma.',
        codAluno: 3,
      },
    ],
  })

  await prisma.resposta.createMany({
    data: [
      {
        codCoordenador: 1,
        codSolicitacao: 1,
        resposta:
          'Entendo. Estou providenciando a contabilizaçao das suas horas. Tenha uma boa tarde.',
      },
      {
        codCoordenador: 4,
        codSolicitacao: 2,
        resposta:
          'Desculpe a demora. O seu problema ja foi resolvido. Espero que tenha conseguido entregar a sua atividade!',
      },
    ],
  })
}

seed()
