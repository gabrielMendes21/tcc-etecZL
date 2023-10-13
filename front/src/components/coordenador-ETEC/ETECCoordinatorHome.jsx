import Card from '../Card'
import UserInfo from '../UserInfo'
import Main from '../Main'
import Link from 'next/link'
import TradLink from '../Link'
import Classes from '../Classes'

export default async function ETECCoordinatorHome() {
  return (
    <Main>
      {/* Coordinator info */}
      <UserInfo />

      {/* Classes */}
      <Classes />

      <hr className="border-[#C6C6C6] mt-7" />

      {/* Support requests */}
      <h2 className="text-base py-7 md:text-2xl">Solicitações de suporte</h2>
      <div className="classes space-y-2">
        <Link href="/coordenador-ETEC/suporte/suporte1">
          <Card>
            <span className="text-base">Danilo Costa Rodrigues</span>
            <span>Horas não contabilizadas - 12/05/2023</span>
          </Card>
        </Link>
        <Card>
          <span className="text-base">Gabriel da Silva Mendes</span>
          <span>Reconsiderações - 08/05/2023</span>
        </Card>
        <Card>
          <span className="text-base">Andrei Luiz Florencio Matias</span>
          <span>Problemas no site - 09/05/2023</span>
        </Card>
      </div>

      {/* See more link */}
      <TradLink to="/coordenador-ETEC/suporte" size={10}>
        Ver mais
      </TradLink>
    </Main>
  )
}
