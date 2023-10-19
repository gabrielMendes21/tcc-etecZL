import AnsweredSupportRequests from '@/components/AnsweredSupportRequests'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import PendingSupportRequests from '@/components/PendingSupportRequests'

export default function Suporte() {
  return (
    <Main>
      <H1 title="Solicitações de suporte" />

      {/* Answered requests */}
      <h2 className="text-base py-7 md:text-2xl">Respondidas</h2>
      <AnsweredSupportRequests coordinator="IBM" />

      <hr className="border-[#C6C6C6] mt-7" />

      {/* Not-answered requests */}
      <h2 className="text-base py-7 md:text-2xl">Não respondidas</h2>
      <PendingSupportRequests coordinator="IBM" />
    </Main>
  )
}
