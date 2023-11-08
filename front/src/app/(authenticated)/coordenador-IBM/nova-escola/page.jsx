'use client'

import H1 from '@/components/H1'
import LoadingIcon from '@/components/LoadingIcon'
import Main from '@/components/Main'
import { api } from '@/lib/api'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NovaEscola() {
  const [loadingIcon, setLoadingIcon] = useState(<ArrowRight strokeWidth={1} />)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = async (data) => {
    setLoadingIcon(<LoadingIcon color="#FFF" />)

    await api.post('/escola', data)

    setLoadingIcon(<ArrowRight />)
    router.push('/coordenador-IBM/dashboard')
  }
  return (
    <Main>
      <H1 title="Criar escola" />
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8"
      >
        <label htmlFor="school-name" className="text-sm block mt-6">
          Nome da escola
        </label>
        <input
          type="text"
          id="school-name"
          className="mt-3 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o nome da escola"
          {...register('schoolName', { required: true })}
        />
        {errors.schoolName?.type === 'required' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Não deixe o campo vazio
          </p>
        )}

        <span className="block mt-6">
          Adicione um coordenador para esta escola
        </span>

        <label htmlFor="coordinator-name" className="text-sm block mt-6">
          Nome do coordenador
        </label>
        <input
          type="text"
          id="coordinator-name"
          className="mt-3 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o nome do coordenador"
          {...register('coordinatorName', { required: true })}
        />
        {errors.coordinatorName?.type === 'required' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Não deixe o campo vazio
          </p>
        )}

        <label htmlFor="coordinator-email" className="text-sm block mt-6">
          Email
        </label>
        <input
          type="text"
          id="coordinator-email"
          className="mt-3 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite o email do coordenador"
          {...register('coordinatorEmail', {
            required: true,
            pattern: /.*@.*\.*/i,
          })}
        />
        {errors.coordinatorEmail?.type === 'required' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Não deixe o campo vazio
          </p>
        )}
        {errors.coordinatorEmail?.type === 'pattern' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Exemplo: email@dominio.com
          </p>
        )}

        <label htmlFor="coordinator-password" className="text-sm block mt-6">
          Senha
        </label>
        <input
          type="password"
          id="coordinator-password"
          className="mt-3 border-b block w-full border-black bg-[#F4F4F4] focus:outline-highlighted rounded-none p-2"
          placeholder="Digite uma senha para o coordenador (essa senha será criptografada e não poderá ser vista novamente)"
          {...register('coordinatorPassword', {
            required: true,
            minLength: 6,
          })}
        />
        {errors.coordinatorPassword?.type === 'required' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *Não deixe o campo vazio
          </p>
        )}
        {errors.coordinatorPassword?.type === 'minLength' && (
          <p role="alert" className="text-red-500 text-xs font-bold mt-2">
            *A senha deve ter, no mínimo, 6 caracteres
          </p>
        )}

        <button
          type="submit"
          className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 mb-2 p-3"
        >
          Cadastrar escola
          {loadingIcon}
        </button>
      </form>
    </Main>
  )
}
