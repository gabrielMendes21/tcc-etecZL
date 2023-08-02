'use client'

import Card from '@/components/Card'
import Dropdown from '@/components/Dropdown'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import NewButton from '@/components/NewButton'

export default function Suporte() {
  return (
    <Main>
      <H1 title="Suporte" />

      {/* Complaints sent */}
      <Dropdown title="Solicitações enviadas">
        <Card>
          <span className="text-base">Horas não contabilizadas</span>
          <span>Aguardando resposta...</span>
        </Card>
        <Card>
          <span className="text-base">Erro na entrega</span>
          <span>Aguardando resposta...</span>
        </Card>
      </Dropdown>

      {/* Complaints answered  */}
      <Dropdown title="Solicitações respondidas">
        <Card>
          <span className="text-base">Atraso nas atividades</span>
          <span>Respondida em 20/09/2023</span>
        </Card>
        <Card>
          <span className="text-base">Dúvidas sobre a atividade</span>
          <span>Respondida em 12/05/2023</span>
        </Card>
      </Dropdown>

      {/* New support requeat button */}
      <NewButton text="Nova solicitação" to="suporte/nova-solicitacao" />
    </Main>
  )
}
