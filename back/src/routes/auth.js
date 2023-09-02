import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['error', 'query']
})

export async function authRoutes(app) {
    app.decorate("authenticate", async (req, res) => {
        try {
            await req.jwtVerify()
        } catch (err) {
            res.send(err)
        }
    })

    app.get('/validateToken', {onRequest: [app.authenticate]}, async(req, res) => {
        return req.user
    })

    app.post('/login', async (req, res) => {
        // Check type of user and if it exists
        const { email, senha } = req.body 

        const userStudent = await prisma.aluno.findUnique({
            where: {
               email: email,
            }
        })

        const userCoordinator = await prisma.coordenador.findUnique({
            where: {
               email: email,
            }
        })

        if (userStudent) {
            if (userStudent.senha !== senha) {
                return {
                    token: undefined,
                    message: "Senha incorreta"
                }
            } else {
                const token = app.jwt.sign({
                    nome: userStudent.nome, 
                    email: userStudent.email, 
                    horasAnuais: userStudent.horasAnuais, 
                    horasConcluidas: userStudent.horasConcluidas, 
                    turma: userStudent.turma, 
                    escolaId: userStudent.escolaId
                }, {
                    sub: userStudent.id.toString(),
                    expiresIn: '1 day'
                })

                return {
                    token
                }
            }
        } else if (userCoordinator) {
            if (userCoordinator.senha !== senha) {
                return {
                    token: undefined,
                    message: "Senha incorreta"
                }
            } else {
                const token = app.jwt.sign({
                    nome: userCoordinator.nome, 
                    email: userCoordinator.email,
                    tipoCoordenador: userCoordinator.tipoCoordenador,  
                    escolaId: userCoordinator.escolaId
                }, {
                    sub: userCoordinator.id.toString(),
                    expiresIn: '1 day'
                })

                res.send(token)
            }
        } else {
            return {
                token: undefined,
                message: "Usuário não existe"
            }
        }
    })
}