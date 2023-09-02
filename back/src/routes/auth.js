import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['error', 'query']
})

export async function authRoutes(app) {
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
                res.send("Senha incorreta")
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

                res.send(token)
            }
        } else if (userCoordinator) {
            if (userCoordinator.senha !== senha) {
                res.send("Senha incorreta")
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
                message: "Usuário não existe"
            }
        }
    })
}