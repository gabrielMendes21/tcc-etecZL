export async function alunoRoutes(app) {
    app.get('/aluno', () => {
        return {
            message: "Hello"
        }
    })
}