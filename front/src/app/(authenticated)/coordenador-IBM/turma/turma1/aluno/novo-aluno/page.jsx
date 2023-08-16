import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { Upload } from 'lucide-react'

export default function NovoAluno() {
  return (
    <Main>
      <H1 title="Novo aluno" />

      <form action="" className="mt-8">
        <label htmlFor="name">Nome do aluno</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o nome do aluno"
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o email institucional do aluno"
          id="email"
        />

        <label htmlFor="rm">RM</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o RM do aluno"
          id="rm"
        />

        <hr className="border-[#C6C6C6] mt-10" />

        <FormSubmitButton title="Adicionar aluno" />

        <button className="flex justify-between items-center w-full text-left font-light bg-[#008000] hover:brightness-110 transition-all text-white mb-2 p-3">
          Importar planilha
          <Upload strokeWidth={1} />
        </button>
      </form>
    </Main>
  )
}
