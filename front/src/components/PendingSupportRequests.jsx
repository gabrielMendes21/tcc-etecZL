import { api } from '@/lib/api'
import Link from 'next/link'
import Card from './Card'
// import TradLink from './Link'

export default async function PendingSupportRequests({ coordinator }) {
  const pendingRequestsResponse = await api.get(
    '/solicitacoesSuporte/pendentes',
  )
  const pendingRequests = pendingRequestsResponse.data

  return (
    <>
      <div className="classes space-y-2">
        {pendingRequests.length === 0 ? (
          <span className="text-black/30 block">
            Você não possui nenhuma solicição pendente
          </span>
        ) : (
          <>
            {pendingRequests.map((request) => {
              const creationDate = new Date(request.dataCriacao)
              const formattedDate = creationDate.toLocaleDateString()

              return (
                <Link
                  href={`/coordenador-${coordinator}/suporte/${request.id}`}
                >
                  <Card>
                    <span className="text-base">{request.aluno.nome}</span>
                    <span>
                      {request.titulo} - {formattedDate}
                    </span>
                  </Card>
                </Link>
              )
            })}

            {/* See more link */}
            {/* <TradLink to={`/coordenador-${coordinator}/suporte`} size={10}>
              Ver mais
            </TradLink> */}
          </>
        )}
      </div>
    </>
  )
}
