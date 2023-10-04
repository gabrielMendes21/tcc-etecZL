import prisma from '../src/lib/prisma.js'

async function seed() {
    await prisma.escola.create({
        data: {
            nomeEscola: "ETEC Zona Leste",
            Usuario: {
                create: [{
                    email: "gabriel.mendes88@etec.sp.gov.br",
                    senha: "123456",
                    nome: "Gabriel da Silva Mendes",
                    turma: "3º DS AMS",
                    rm: 22302,
                    horasConcluidas: 50,
                    horasAnuais: 120,
                    tipoUsuario: "Aluno",
                }, {
                    email: "danilo.rodrigues108@etec.sp.gov.br",
                    senha: "654321",
                    nome: "Danilo Costa Rodrigues",
                    turma: "3º DS AMS",
                    rm: 22388,
                    horasConcluidas: 69,
                    horasAnuais: 120,
                    tipoUsuario: "Aluno",
                }]
            }
        }
    })

    await prisma.atividade.createMany({
        data: [{
            titulo: "Design Thinking",
            descricao: "Fale sobre o que você aprendeu na última sessão de Design Thinking",
            tipoAtividade: "Sessão",
            horasAtividade: 2,
            prazoEntrega: "2023-11-10T03:00:00.000Z",
        }]
    })
}