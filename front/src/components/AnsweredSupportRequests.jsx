import { api } from '@/lib/api'
import Link from 'next/link'
import Card from './Card'

export default async function AnsweredSupportRequests({ coordinator }) {
  const answeredRequestsResponse = await api.get(
    '/solicitacoesSuporte/respondidas',
  )
  const answeredRequests = answeredRequestsResponse.data

  return (
    <>
      <div className="classes space-y-2">
        {answeredRequests.length === 0 ? (
          <span className="text-black/30 block">
            Você não possui nenhuma solicição Respondida
          </span>
        ) : (
          answeredRequests.map((request) => {
            const answerDate = new Date(request.Resposta.dataResposta)
            const formattedDate = answerDate.toLocaleDateString()

            return (
              <Link href={`/coordenador-${coordinator}/suporte/${request.id}`}>
                <Card>
                  <span className="text-base">{request.aluno.nome}</span>
                  <span>
                    {request.titulo} - respondida em: {formattedDate}
                  </span>
                </Card>
              </Link>
            )
          })
        )}
      </div>
    </>
  )
}
