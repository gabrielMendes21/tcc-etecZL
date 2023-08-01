import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'

export default function NovaSolicitação() {
  return (
    <Main>
      <H1 title="Solicitar suporte" />

      <form action="" className="pt-5">
        <label htmlFor="subject" className="text-sm">
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Digite o assunto da sua solicitação"
          className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
        />

        <label htmlFor="message" className="text-sm">
          Mensagem
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Digite a sua mensagem"
          className="mt-3 mb-8 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
        />

        <hr className="border[#C6C6C6]" />

        <FormSubmitButton title="Enviar" />
      </form>
    </Main>
  )
}
