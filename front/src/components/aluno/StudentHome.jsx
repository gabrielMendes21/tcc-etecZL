import Main from '../Main'
import UserInfo from '../UserInfo'
import CircleProgress from '../circle/CircleProgress'
import PendingTasks from '../PendingTasks'

export default async function StudentHome() {
  return (
    <Main>
      {/* Student info */}
      <UserInfo />
      <div className="lg:flex lg:justify-center lg:mt-12">
        {/* Pending Tasks */}
        <PendingTasks />

        <hr className="border-[#C6C6C6] my-4 lg:rotate-90 lg:w-72 lg:self-center" />

        <div className="progress-info">
          {/* Progress info */}
          <h2 className="text-base lg:text-2xl mt-5 mb-8">
            Horas anuais concluídas
          </h2>

          <div className="flex items-center justify-start gap-10 my-4">
            <CircleProgress unity="horas" />
          </div>
        </div>
      </div>
    </Main>
  )
}
