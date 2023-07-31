import H1 from '@/components/H1'
import Main from '@/components/Main'
import { ArrowRight, Trash2 } from 'lucide-react'

export default function EditarAtividade() {
  return (
    <Main>
      <H1 title="Editar atividade" />

      {/* Task fields */}
      <form action="" className="pt-5">
        <label htmlFor="task-name" className="text-sm">
          Nome da atividade
        </label>
        <input
          type="text"
          id="task-name"
          className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o nome da atividade"
        />

        <label htmlFor="task-details" className="text-sm">
          Detalhes da atividade
        </label>
        <textarea
          id="task-details"
          cols="30"
          rows="10"
          className="mt-3 mb-8 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          placeholder="Digite os detalhes da atividade"
        ></textarea>

        <label htmlFor="task-date" className="text-sm">
          Data de entrega
        </label>
        <input
          type="date"
          id="task-date"
          className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
        />

        <label htmlFor="task-files" className="text-sm">
          Anexar materiais de apoio
        </label>
        <input
          id="task-files"
          type="file"
          multiple
          className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2 text-sm"
        />

        <button className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white mb-2 p-3">
          Editar
          <ArrowRight strokeWidth={1} />
        </button>
        <button className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] text-white p-3">
          Excluir atividade
          <Trash2 strokeWidth={1} />
        </button>
      </form>
    </Main>
  )
}