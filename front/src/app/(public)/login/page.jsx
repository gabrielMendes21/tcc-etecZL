import H1 from '@/components/H1'
import Main from '@/components/Main'
import Image from 'next/image'
import darkLogo from '../../../assets/dark-logo.svg'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function Login() {
  return (
    <>
      <Header className="md:invisible" />
      <Main className="mt-5">
        <div className="md:flex md:justify-center md:items-center md:gap-20 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div>
            <Image
              src={darkLogo}
              alt=""
              className="invisible md:visible w-[300px]"
            />
            <h1 className="invisible absolute md:visible md:static text-xl">
              Efetue login no Easy Hours
            </h1>
            <H1
              title="Efetue login no Easy Hours"
              className="md:absolute md:invisible pt-0"
            />
          </div>

          <div>
            <form action="" className="pt-5">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-3 mb-8 border-b block border-black w-full bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
                placeholder="Digite seu email"
              />
              <label htmlFor="senha" className="text-sm">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="mt-3 mb-8 border-b block border-black w-full bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
                placeholder="Digite sua senha"
              />
              <button className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white mb-2 p-3">
                Entrar
                <ArrowRight strokeWidth={1} />
              </button>
            </form>

            <hr className="border-[#C6C6C6 mt-9 mb-5" />

            <span className="text-xs">
              Esqueceu a senha?{' '}
              <Link href="" className="text-highlighted">
                Entre em contato com um coordenador
              </Link>
            </span>
          </div>
        </div>
      </Main>
    </>
  )
}
