'use client'

import FormSubmitButton from '@/components/FormSubmitButton'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { api } from '@/lib/api'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Editar() {
  // Input values
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [rm, setRm] = useState()

  const router = useRouter()

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await api.put(`/aluno?studentId=${studentId}`, {
      nome: data.nome || name,
      email: data.email || email,
      rm: data.rm || rm,
    })

    router.refresh()
    router.push(`../${studentId}`)
  }

  return (
    <Main>
      <H1 title="Editar aluno" />

      <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nome do aluno</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o nome do aluno"
          id="name"
          defaultValue={name}
          {...register('nome', { required: true })}
        />

        <label htmlFor="email">Email</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o email institucional do aluno"
          id="email"
          defaultValue={email}
          {...register('email', { required: true, pattern: /.*@.*\.*/i })}
        />
        {errors.email?.type === 'pattern' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Exemplo: nome@dominio.com
          </p>
        )}

        <label htmlFor="rm">RM</label>
        <input
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          type="text"
          placeholder="Digite o RM do aluno"
          id="rm"
          defaultValue={rm}
          {...register('rm', { required: true })}
        />

        <FormSubmitButton title="Editar aluno" />
      </form>
    </Main>
  )
}
