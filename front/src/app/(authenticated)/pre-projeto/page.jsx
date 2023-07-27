import { Image } from 'lucide-react'
import Delay from '@/components/LoadDelay'

export default function Task() {
  return (
    <main>
      <Delay>
        {/* Task info */}
        <div className="px-4 space-y-10">
          <div className="pt-7">
            <h1 className="text-center font-medium text-xl">Pré-projeto</h1>
            <span className="block text-center">19/03/2023</span>
          </div>
          <hr className="border-[#C6C6C6]" />
          {/* Task details */}
          <div>
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
        </div>
      </Delay>
    </main>
  )
}
