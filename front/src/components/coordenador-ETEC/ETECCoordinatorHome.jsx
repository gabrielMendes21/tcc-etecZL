import UserInfo from '../UserInfo'
import Main from '../Main'
import TradLink from '../Link'
import Classes from '../Classes'
import SupportRequests from '../SupportRequests'

export default async function ETECCoordinatorHome() {
  return (
    <Main>
      {/* Coordinator info */}
      <UserInfo />

      {/* Classes */}
      <Classes />

      <hr className="border-[#C6C6C6] mt-7" />

      {/* Support requests */}
      <SupportRequests />

      {/* See more link */}
      <TradLink to="/coordenador-ETEC/suporte" size={10}>
        Ver mais
      </TradLink>
    </Main>
  )
}
