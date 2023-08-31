import Main from '@/components/Main'
import Image from 'next/image'

export default function Pitch() {
  return (
    <Main>
      {/* Task info */}
      <div className=" space-y-10">
        <div className="pt-7">
          <h1 className="text-center font-medium text-xl">
            Pitch de apresentação
          </h1>
          <span className="block text-center">19/05/2023</span>
        </div>

        <hr className="border-[#C6C6C6]" />

        {/* Task details */}
        <div>
          <h2 className="font-medium">Detalhes da tarefa:</h2>
          <p className="py-3 text-justify text-xs leading-relaxed">
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
    </Main>
  )
}
