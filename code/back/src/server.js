import fastify from 'fastify'
import { alunoRoutes } from "./routes/aluno.js"

const app = fastify({
    logger: true
})

app.register(alunoRoutes)

app
  .listen({
    port: 3333,
  })
  .then((res) => console.log(`Running on: ${res}`))