'use client'

import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Editar() {
  // Input values
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [rm, setRm] = useState()

  const pathName = usePathname()
  const paths = pathName.split('/')
  const studentId = paths[paths.indexOf('editar') - 1]

  useEffect(() => {
    fetch(`http://localhost:3000/api/aluno?id=${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.nome)
        setEmail(data.email)
        setRm(data.rm)
      })
  }, [])

  return (
    <Main>
      <H1 title="Editar aluno" />

      <form action="" className="mt-8">
        <label htmlFor="name">Nome do aluno</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o nome do aluno"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o email institucional do aluno"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="rm">RM</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o RM do aluno"
          id="rm"
          value={rm}
          onChange={(e) => setRm(e.target.value)}
        />

        <FormSubmitButton title="Editar aluno" />
      </form>
    </Main>
  )
}
