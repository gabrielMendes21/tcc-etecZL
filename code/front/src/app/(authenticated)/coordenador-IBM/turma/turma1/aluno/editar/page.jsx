import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'

export default function Editar() {
  return (
    <Main>
      <H1 title="Editar aluno" />

      <form action="" className="mt-8">
        <label htmlFor="name">Nome do aluno</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o nome do aluno"
          id="name"
          value="Danilo Costa Rodrigues"
        />

        <label htmlFor="email">Email</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o email institucional do aluno"
          id="email"
          value="danilo.rodrigues108@etec.sp.gov.br"
        />

        <label htmlFor="rm">RM</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o RM do aluno"
          id="rm"
          value="22388"
        />

        <FormSubmitButton title="Editar aluno" />
      </form>
    </Main>
  )
}
