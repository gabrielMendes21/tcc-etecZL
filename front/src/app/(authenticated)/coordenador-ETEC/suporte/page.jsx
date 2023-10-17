import AnsweredSupportRequests from '@/components/AnsweredSupportRequests'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import PendingSupportRequests from '@/components/PendingSupportRequests'

export default function Suporte() {
  return (
    <Main>
      <H1 title="Solicitações de suporte" />

      {/* Answered requests */}
      <H2 title="Respondidas" />
      <AnsweredSupportRequests coordinator="ETEC" />

      <hr className="border-[#C6C6C6] mt-7" />

      {/* Not-answered requests */}
      <H2 title="Não respondidas" />
      <PendingSupportRequests coordinator="ETEC" />
    </Main>
  )
}
