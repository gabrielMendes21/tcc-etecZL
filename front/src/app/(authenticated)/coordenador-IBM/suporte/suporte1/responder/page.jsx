import FormSubmitButton from '@/components/FormSubmitButton'
import H2 from '@/components/H2'
import Main from '@/components/Main'

export default function Resposta() {
  return (
    <Main>
      <H2 title="Responder suporte" />

      <form action="" className="mt-8">
        <label htmlFor="resposta">Resposta</label>
        <textarea
          id="resposta"
          cols="30"
          rows="10"
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          placeholder="Digite a sua resposta"
        ></textarea>

        <FormSubmitButton title="Enviar resposta" />
      </form>
    </Main>
  )
}
