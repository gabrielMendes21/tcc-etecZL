import { api } from '@/lib/api'
import Link from 'next/link'
import Card from './Card'

export default async function SupportRequests() {
  const pendingRequestsResponse = await api.get(
    '/solicitacoesSuporte/pendentes',
  )
  const pendingRequests = pendingRequestsResponse.data

  return (
    <>
      <h2 className="text-base py-7 md:text-2xl">Solicitações de suporte</h2>
      <div className="classes space-y-2">
        {pendingRequests.length === 0 ? (
          <span className="text-black/30 block">
            Você não possui nenhuma solicição pendente
          </span>
        ) : (
          pendingRequests.map((request) => {
            const creationDate = new Date(request.dataCriacao)
            const formattedDate = creationDate.toLocaleDateString()

            return (
              <Link href={`/coordenador-ETEC/suporte/${request.id}`}>
                <Card>
                  <span className="text-base">{request.aluno.nome}</span>
                  <span>
                    {request.titulo} - {formattedDate}
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
