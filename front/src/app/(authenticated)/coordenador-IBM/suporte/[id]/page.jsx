import Main from '@/components/Main'
import SupportResponseModal from '@/components/SupportResponseModal'
import { api } from '@/lib/api'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const supportRequestsResponse = await api.get('/solicitacoesSuporte')
  const supportRequests = supportRequestsResponse.data

  return supportRequests.map((supportRequest) => {
    return {
      id: supportRequest.id.toString(),
    }
  })
}
export default async function Suporte({ params }) {
  const convertISOtoDateFormat = (string) => {
    let date = new Date(string)
    date = date.toLocaleDateString()

    return date
  }

  const supportRequestresponse = await api.get('/solicitacaoSuporte', {
    params: {
      id: Number(params.id),
    },
  })

  const supportRequest = supportRequestresponse.data

  return (
    <Main>
      {supportRequest.Resposta ? (
        <>
          <h1 className="block mt-7 font-medium text-xl text-center">
            Suporte
          </h1>
          {/* Request subject */}
          <span className="block font-light text-center">
            {supportRequest.titulo}
          </span>
          <hr className="border-[#C6C6C6] my-8" />
          {/* Support message */}
          <div className="my-8">
            <h2 className="font-medium md:text-xl">Mensagem:</h2>
            <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
              {supportRequest.conteudo}
            </p>

            {/* Support message onwer */}
            <span className="text-xs block">
              {supportRequest.aluno.nome} -{' '}
              {supportRequest.aluno.turma.nomeTurma},{' '}
              {supportRequest.aluno.turma.escola.nomeEscola}
            </span>
            <span className="font-light text-xs text[#525252]">
              {convertISOtoDateFormat(supportRequest.dataCriacao)}
            </span>
          </div>
          <hr className="border-[#C6C6C6] my-8" />
          {/* Support response */}
          <div className="my-8">
            <h2 className="font-medium md:text-xl">Resposta:</h2>
            <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
              {supportRequest.Resposta.resposta}
            </p>

            <span className="text-xs block">
              {supportRequest.Resposta.coordenador.nome} -{' '}
              {supportRequest.Resposta.coordenador.tipoUsuario.tipoUsuario}
            </span>
            <span className="font-light text-xs text[#525252]">
              {convertISOtoDateFormat(supportRequest.Resposta.dataResposta)}
            </span>
          </div>
          <div className="flex justify-between items-center w-full text-left font-light bg-[#b8b8b8] text-white mt-7 p-3">
            Respondida!
          </div>
        </>
      ) : (
        <>
          <h1 className="block mt-7 font-medium text-xl text-center">
            Suporte
          </h1>
          {/* Request subject */}
          <span className="block font-light text-center">
            {supportRequest.titulo}
          </span>

          <hr className="border-[#C6C6C6] my-8" />

          {/* Support message */}
          <div className="my-8">
            <h2 className="font-medium md:text-xl">Mensagem:</h2>
            <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
              {supportRequest.conteudo}
            </p>
          </div>

          {/* Support request author */}
          <span className="text-xs block">
            {supportRequest.aluno.nome} - {supportRequest.aluno.turma.nomeTurma}
            , {supportRequest.aluno.turma.escola.nomeEscola}
          </span>
          <span className="font-light text-xs text[#525252]">
            {convertISOtoDateFormat(supportRequest.dataCriacao)}
          </span>

          <hr className="border-[#C6C6C6] my-8" />

          {/* Answer button (mobile) */}
          <Link
            href={`${supportRequest.id}/responder`}
            className="md:absolute md:invisible flex justify-between items-center w-full md:w-0 text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
          >
            Responder
            <ArrowRight strokeWidth={1} />
          </Link>

          {/* Modal */}
          <SupportResponseModal supportRequest={supportRequest} />
        </>
      )}
    </Main>
  )
}
