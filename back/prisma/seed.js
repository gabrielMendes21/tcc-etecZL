import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['error', "query"]
})

async function createMainData() {
    const atividades = await prisma.atividade.createMany({
        data: [{
            titulo: "Pitch de apresentação",
            descricao: "Desenvolver um roteiro para um pitch que será apresentado para a IBM no dia 25/09/2023",
            tipoAtividade: "tarefa",
            horasAtividade: 5,
            prazoEntrega: "2023-09-20T02:59:59.000Z",
        }, {
            titulo: "Pré-projeto",
            descricao: "Desenvolver word com as principais informações do seu TCC",
            tipoAtividade: "tarefa",
            horasAtividade: 4,
            prazoEntrega: "2023-03-19T02:59:59.000Z",
        }]
    })
    
    const escola = await prisma.escola.create({
        data: {
            nomeEscola: "ETEC Zona Leste",
            Aluno: {
                create: [{
                    id: 22302,
                    nome: "Gabriel da Silva Mendes",
                    email: "gabriel.mendes88@etec.sp.gov.br",
                    senha: "ga7521", // A senha será as duas primeiras letras do nome + os dois últimos dígitos do CPF e o dia de nascimento
                    turma: "3ºDS AMS",
                    horasConcluidas: 80,
                    horasAnuais: 120,
                    Entrega: {
                        create: [{
                            dataEntrega: "2023-09-19T02:59:59.000Z",
                            codAtividade: 1,
                        }]
                    }
                }, {
                    id: 22388,
                    nome: "Danilo Costa Rodrigues",
                    email: "danilo.rodrigues108@etec.sp.gov.br",
                    senha: "da1101",
                    turma: "3ºDS AMS",
                    horasConcluidas: 99,
                    horasAnuais: 120,
                }]
            },
            Coordenador: {
                create: [{
                    nome: "Rogério Bezerra Costa",
                    email: "rogerio@etec.sp.gov.br",
                    senha: "ro123",
                    tipoCoordenador: "Coordenador ETEC",
                    Correcao: {
                        create: [{
                            dataCorrecao: "2023-03-19T02:59:59.000Z",
                            atividadeId: 1
                        }]
                    }
                }]
            }
        }
    })

    const solicitacaoSuporte1 = await prisma.solicitacaoSuporte.create({
        data: {
            titulo: "Sessão do mês passado",
            mensagem: "Olá. Gostaria de fazer uma consideração sobre uma sessão que tivemos no mês passado, na qual eu estava presente, porém no app consta que eu não estava.",
            alunoId: 22302,
            dataCriacao: "2023-11-20T02:59:59.000Z",

            Resposta: {
                create: [{
                    dataResposta: "2023-11-21T02:59:59.000Z",
                    resposta: "Olá, Henrique! Obrigado pela observação, ela foi considerada e já adicionei horas ao seu currículo P-TECH. Obrigado e tenha um bom dia.",
                    coordenadorId: 1
                }]
            }
        }
    })

    const solicitacaoSuporte2 = await prisma.solicitacaoSuporte.create({
        data: {
            titulo: "Reconsiderações",
            mensagem: "Olá. Gostaria de fazer uma consideração sobre as minhas horas, que não foram contabilizadas, sendo que eu fiz todas as atividades propostas pelo programa.",
            alunoId: 22388,
            dataCriacao: "2023-05-02T02:59:59.000Z",
        }
    })
}

createMainData()