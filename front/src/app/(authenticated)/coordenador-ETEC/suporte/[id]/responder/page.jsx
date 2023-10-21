'use client'

import { PageContext } from '@/app/context/PageContext'
import FormSubmitButton from '@/components/FormSubmitButton'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import { api } from '@/lib/api'
import { usePathname, useRouter } from 'next/navigation'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

export default function Resposta() {
  const pathname = usePathname()

  const router = useRouter()
  const user = useContext(PageContext)

  // Form control
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const supportRequestId = pathname.split('/').slice(3, 4)[0]

    await api.post(
      `/solicitacaoSuporte/resposta?requestId=${supportRequestId}&coordinatorId=${user?.user?.sub}`,
      {
        ...data,
      },
    )

    router.push('/coordenador-ETEC/suporte')
  }

  return (
    <Main>
      <H2 title="Responder suporte" />

      <form
        action=""
        className="mt-8"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="resposta">Resposta</label>
        <textarea
          id="resposta"
          cols="30"
          rows="10"
          className="mt-3 mb-6 w-full resize-none border-b block border-black bg-[#F4F4F4] focus:outline-highlighted p-2"
          placeholder="Digite a sua resposta"
          {...register('responseMessage')}
        ></textarea>

        <FormSubmitButton title="Enviar resposta" />
      </form>
    </Main>
  )
}
