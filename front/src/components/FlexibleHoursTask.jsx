import FileForm from './FileForm'

export default function FlexibleHoursTask({ task }) {
  // Get task due date
  const taskDueDate = new Date(task.atividade.prazoEntrega)
  const now = new Date()
  now.setHours(now.getHours() - 3)

  // Verify if task is sent, overdue or pending
  const sent = task.entregue
  const overdue = taskDueDate < now && !sent
  const pending = !sent && !overdue

  return (
    <div className="space-y-10">
      <div className="pt-7">
        <h1 className="text-center font-medium text-xl">
          {task.atividade.titulo}
        </h1>
        <span className="block text-center">
          {new Date(task.atividade.prazoEntrega).toLocaleDateString()}
        </span>
      </div>

      <hr className="border-[#C6C6C6]" />

      <span className="block my-8 text-lg md:text-2xl">
        Anexe todos os certificados dos cursos
      </span>
      <FileForm />
    </div>
  )
}
