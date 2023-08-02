import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { Trash2 } from 'lucide-react'

export default function NovaAtividade() {
  return (
    <Main>
      <H1 title="Criar atividade" />

      {/* Task fields */}
      <form action="" className="pt-5">
        <label htmlFor="class" className="text-sm">
          Turma
        </label>
        <select name="class" id="class">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input
          type="text"
          id="class"
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

        <FormSubmitButton title="Editar" />
        <button className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] text-white p-3">
          Excluir atividade
          <Trash2 strokeWidth={1} />
        </button>
      </form>
    </Main>
  )
}