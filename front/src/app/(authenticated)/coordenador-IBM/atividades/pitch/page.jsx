import Card from '@/components/Card'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import { ArrowRight, Image } from 'lucide-react'
import Link from 'next/link'

export default function Pitch() {
  return (
    <Main>
      {/* Task info */}
      <div>
        <div className="pt-7">
          <h1 className="text-center font-medium text-xl">
            Pitch de apresentação
          </h1>
          <span className="block text-center">19/05/2023</span>
        </div>

        <hr className="border-[#C6C6C6] my-10" />

        {/* Task details */}
        <div className="mb-10">
          <h2 className="font-medium">Detalhes da tarefa:</h2>
          <p className="p-3 text-justify text-xs leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iure corporis hic sit voluptate odit consequatur, eaque eum
            voluptatum, quaerat dolorum veritatis quis exercitationem error
            nesciunt quibusdam repudiandae. Assumenda, placeat!
          </p>
        </div>

        {/* Attached files */}
        <div>
          <h2 className="font-medium mb-4">Materiais disponíveis:</h2>
          <div className="border-2 border-highlighted text-highlighted p-3 flex gap-2 underline">
            <Image alt="image icon" />
            Arquivo1.png
          </div>
        </div>

        <hr className="border-[#C6C6C6] my-8" />

        {/* Edit task link */}
        <Link
          href="pitch/editar"
          className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white p-3"
        >
          Editar atividade
          <ArrowRight strokeWidth={1} />
        </Link>
      </div>

      <hr className="border-[#C6C6C6] mt-8" />

      {/* Sent Activities */}
      <H2 title="Entregues" />

      <Card>
        <span className="text-base">Gabriel da Silva Mendes</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
      <Card>
        <span className="text-base">Danilo Costa Rodrigues</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
      <Card>
        <span className="text-base">Andrei Florêncio Matias</span>
        <span className="text-[#525252]">
          3º AMS, ETEC Zona Leste - 08/05/2023
        </span>
      </Card>
    </Main>
  )
}
