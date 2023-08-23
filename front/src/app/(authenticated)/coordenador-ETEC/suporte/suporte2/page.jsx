import Main from '@/components/Main'

export default function Suporte() {
  return (
    <Main>
      <h1 className="block mt-7 font-medium text-xl text-center">Suporte</h1>
      {/* Request subject */}
      <span className="block font-light text-center">
        Sessão do mês passado
      </span>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Support message */}
      <div className="my-8">
        <h2 className="font-medium md:text-xl">Mensagem:</h2>
        <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
          Olá. Gostaria de fazer uma consideração sobre uma sessão que tivemos
          no mês passado, na qual eu estava presente, porém no app consta que eu
          não estava.
        </p>

        {/* Support message onwer */}
        <span className="text-xs block">
          Henrique Machado - 3º AMS, ETEC Zona Leste
        </span>
        <span className="font-light text-xs text[#525252]">12/05/2023</span>
      </div>

      <hr className="border-[#C6C6C6] my-8" />

      {/* Support response */}
      <div className="my-8">
        <h2 className="font-medium md:text-xl">Resposta:</h2>
        <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
          Olá, Henrique! Obrigado pela observação, ela foi considerada e já
          adicionei horas ao seu currículo P-TECH. Obrigado e tenha um bom dia.
        </p>

        <span className="text-xs block">
          Rogério Bezerra? - Coordenador, ETEC Zona Leste
        </span>
        <span className="font-light text-xs text[#525252]">12/05/2023</span>
      </div>

      <div className="flex justify-between items-center w-full text-left font-light bg-[#b8b8b8] text-white mt-7 p-3">
        Respondida!
      </div>
    </Main>
  )
}
