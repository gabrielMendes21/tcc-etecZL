"use client"

import CircleProgress from '@/components/circle/CircleProgress'
// import Progress from '@/components/Progress'
import Task from '@/components/Task'

export default function Home() {
  return (
    <main className='px-4 relative flex flex-col'>
      <h1 className='text-xl py-7'>Olá, Aluno!</h1>

      <hr className='border-[#C6C6C6]' />

      <h2 className='text-base mt-5 mb-8'>Cronograma de horas P-TECH</h2>

      <div className="cronograma space-y-5">
        <Task name="Pré-projeto" hours={2} dueDate="19/03/2023" taskStatus="complete" />
        <Task name="Diagramas do projeto" hours={6} dueDate="02/04/2023" taskStatus="complete" />
        <Task name="Monografia" hours={4} dueDate="05/06/2023" taskStatus="complete" />
        <Task name="Pitch de Apresentação" hours={1} dueDate="01/08/2023" taskStatus="pending" />
        <Task name="Cursos do skills build" hours={40} dueDate="24/06/2023" taskStatus="overdue" />
      </div>

      {/* <Progress percentage={58} /> */}
      <CircleProgress percentage={60} />
    </main>
  )
}
