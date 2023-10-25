import { ArrowRight } from 'lucide-react'

export default function SessionTask({ task }) {
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
      <form action="">
        <label htmlFor="knowledge">O que você aprendeu nessa sessão?</label>
        <textarea
          name="knowledge"
          id="knowledge"
          cols="30"
          rows="10"
          className="mt-3 mb-8 border-b block resize-none border-black w-full bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o que você aprendeu"
        ></textarea>

        <button
          type="submit"
          className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white mt-7 p-3"
        >
          Enviar
          <ArrowRight strokeWidth={1} />
        </button>
      </form>
    </div>
  )
}
