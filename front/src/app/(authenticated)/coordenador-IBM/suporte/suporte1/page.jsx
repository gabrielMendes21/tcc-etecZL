import H1 from '@/components/H1'
import Main from '@/components/Main'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Suporte() {
  return (
    <Main>
      <H1 title="Suporte" />
      {/* Support message */}
      <div className="my-8">
        <h2 className="font-medium md:text-xl">Mensagem:</h2>
        <p className="py-3 text-justify text-xs md:text-base leading-relaxed">
          Olá. Gostaria de fazer uma consideração sobre as minhas horas, que não
          foram contabilizadas, sendo que eu fiz todas as atividades propostas
          pelo programa.
        </p>
      </div>

      <span className="text-xs block">
        Danilo Costa Rodrigues - 3º AMS, ETEC Zona Leste
      </span>
      <span className="font-light text-xs text[#525252]">12/05/2023</span>

      <hr className="border-[#C6C6C6] my-8" />

      <Link
        href="suporte1/responder"
        className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      >
        Responder
        <ArrowRight strokeWidth={1} />
      </Link>
    </Main>
  )
}
