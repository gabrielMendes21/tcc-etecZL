import prisma from '../src/lib/prisma.js'

async function seed() {
  await prisma.usuario.create({
    data: {
      email: 'guilherme@email.com',
      senha: '111111',
      nome: 'Guilherme',
      tipoUsuario: 'Coordenador IBM',
    }
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
        descricao: 'Fale sobre o que você aprendeu na última sessão de Design Thinking',
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
    data: [{
      dataEntrega: "2023-11-02T04:00:00.000Z",
      conteudo: "Aprendi bastante coisa.",
      entregue: true,
      codAluno: 1,
      codAtividade: 1
    }, {
      entregue: false,
      codAluno: 1,
      codAtividade: 2
    }, {
      entregue: false,
      codAluno: 2,
      codAtividade: 1
    }, {
      dataEntrega: "2023-10-09T09:00:00.000Z",
      conteudo: "Anexado.",
      entregue: true,
      codAluno: 2,
      codAtividade: 2
    }]
  })
}

seed()
