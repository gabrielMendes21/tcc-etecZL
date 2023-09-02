import fastify from 'fastify'
import { alunoRoutes } from "./routes/aluno.js"
import { authRoutes } from './routes/auth.js'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

const app = fastify({
    logger: true
})

app.register(cors, {
  origin: true // Qualquer frontend pode acessar a API
})

app.register(jwt, {
  secret: "teste"
})

app.register(alunoRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then((res) => console.log(`Running on: ${res}`))