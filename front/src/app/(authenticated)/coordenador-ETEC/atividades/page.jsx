import ETECCoordinatorTasksTab from '@/components/ETECCoordinatorTasksTab'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import NewActivityModal from '@/components/NewActivityModal'
import NewButton from '@/components/NewButton'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

export default async function Atividades() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token').value

  // Get the data from the token
  const userResponse = await api.get(`/login`, {
    params: {
      token,
    },
  })

  const user = userResponse.data

  const classesResponse = await api.get(
    `/escola/turmas?schoolId=${user.escola.codEscola}`,
  )

  const classes = classesResponse.data

  return (
    <Main>
      <H1 title="Atividades" />

      <ETECCoordinatorTasksTab classesTasks={classes} />

      <NewButton
        to="/coordenador-ETEC/atividades/nova-atividade"
        text="Nova atividade"
      />

      <NewActivityModal classes={classes} />
    </Main>
  )
}
