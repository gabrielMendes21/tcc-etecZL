import Card from '@/components/Card'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Link from 'next/link'

export default function Suporte() {
  return (
    <Main>
      <H1 title="Solicitações de suporte" />

      <H2 title="Respondidas" />
      <div className="classes space-y-2">
        <Link href="suporte/suporte1">
          <Card>
            <span className="text-base">Danilo Costa Rodrigues</span>
            <span>3º AMS, ETEC Zona Leste - 12/05/2023</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">Gabriel da Silva Mendes</span>
          <span>3º AMS, ETEC Zona Leste - 08/05/2023</span>
        </Card>
        <Card>
          <span className="text-base">Andrei Luiz Florencio Matias</span>
          <span>3º AMS, ETEC Zona Leste - 09/05/2023</span>
        </Card>
      </div>

      <hr className="border-[#C6C6C6] mt-7" />

      <H2 title="Não respondidas" />
      <div className="classes space-y-2">
        <Link href="suporte/suporte2">
          <Card>
            <span className="text-base">Henrique Machado</span>
            <span>Reconsiderações - 12/05/2023</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">João Vitor</span>
          <span>Horas não contabilizadas - 08/05/2023</span>
        </Card>
        <Card>
          <span className="text-base">Paulo Enrick</span>
          <span>Problemas no site - 09/05/2023</span>
        </Card>
      </div>
    </Main>
  )
}
