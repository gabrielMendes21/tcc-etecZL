// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  await prisma.usuario.create({
    data: {
      email: 'guilherme@email.com',
      senha: '111111',
      nome: 'Guilherme',
      tipoUsuario: 'Coordenador IBM',
    },
  })

  await prisma.escola.create({
    data: {
      nomeEscola: 'ETEC Zona Leste',
      Usuario: {
        create: [
          {
            email: 'gabriel.mendes88@etec.sp.gov.br',
            senha: '123456',
            nome: 'Gabriel da Silva Mendes',
            turma: '3º DS AMS',
            rm: 22302,
            horasConcluidas: 50,
            horasAnuais: 120,
            tipoUsuario: 'Aluno',
          },
          {
            email: 'danilo.rodrigues108@etec.sp.gov.br',
            senha: '654321',
            nome: 'Danilo Costa Rodrigues',
            turma: '3º DS AMS',
            rm: 22388,
            horasConcluidas: 69,
            horasAnuais: 120,
            tipoUsuario: 'Aluno',
          },
          {
            email: 'rogerio.costa3@etec.sp.gov.br',
            senha: '987654',
            nome: 'Rogério Bezerra Costa',
            tipoUsuario: 'Coordenador ETEC',
          },
        ],
      },
    },
  })

  await prisma.atividade.createMany({
    data: [
      {
        titulo: 'Design Thinking',
        descricao:
          'Fale sobre o que você aprendeu na última sessão de Design Thinking',
        tipoAtividade: 'Sessão',
        horasAtividade: 2,
        prazoEntrega: '2023-11-10T10:00:00.000Z',
      },
      {
        titulo: 'Horas flexíveis',
        descricao: 'Anexe as horas flexíveis',
        tipoAtividade: 'Tarefa',
        horasAtividade: 20,
        prazoEntrega: '2023-10-18T10:00:00.000Z',
      },
    ],
  })

  await prisma.entrega.createMany({
    data: [
      {
        dataEntrega: '2023-11-02T04:00:00.000Z',
        conteudo: 'Aprendi bastante coisa.',
        entregue: true,
        codAluno: 1,
        codAtividade: 1,
      },
      {
        entregue: false,
        codAluno: 1,
        codAtividade: 2,
      },
      {
        entregue: false,
        codAluno: 2,
        codAtividade: 1,
      },
      {
        dataEntrega: '2023-10-09T09:00:00.000Z',
        conteudo: 'Anexado.',
        entregue: true,
        codAluno: 2,
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
