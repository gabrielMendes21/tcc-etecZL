'use client'

import Card from '@/components/Card'
import Dropdown from '@/components/Dropdown'
import PageTitle from '@/components/H1'
import Main from '@/components/Main'

export default function Suporte() {
  return (
    <Main>
      <PageTitle title="Suporte" />

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
      {/* <div
          className="dropdown flex items-end gap-2 my-6"
          onClick={handleDropDown}
        >
          <h3 className="font-medium">Respondidas</h3>
          {isActive ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
        <div
          style={{
            display: isActive ? 'block' : 'none',
          }}
          className="activities space-y-5"
        >
          <Card>
            <span className="text-base">Atraso nas atividades</span>
            <span>Respondida em 20/09/2023</span>
          </Card>
          <Card>
            <span className="text-base">Dúvidas sobre a atividade</span>
            <span>Respondida em 12/05/2023</span>
          </Card>
        </div> */}
    </Main>
  )
}
