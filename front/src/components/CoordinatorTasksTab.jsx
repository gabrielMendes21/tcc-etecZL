'use client'

import Link from 'next/link'
import Task from './Task'

export default function CoordinatorTasksTab({ classesTasks, coordinator }) {
  const handleTab = (e) => {
    const tabButtons = Array.from(e.target.parentNode.children)

    const tabsContent = Array.from(
      e.target.parentNode.parentNode.children,
    ).slice(1)

    tabsContent.forEach((tab) => {
      tab.classList.add('invisible', 'absolute', 'w-0')
    })

    const tabContent = tabsContent.find((content) => {
      return content.classList.contains(e.target.classList.item(2))
    })

    tabContent.className = `static m-5 ${e.target.classList.item(2)}`

    tabButtons[tabButtons.length - 1].style.width = `${e.target.offsetWidth}px`
    tabButtons[tabButtons.length - 1].style.left = `${e.target.offsetLeft}px`
  }

  return (
    <div>
      <div className="relative">
        <button className="px-3 mt-5 pending" onClick={handleTab}>
          1º AMS
        </button>
        <button className="px-3 mt-5 sent" onClick={handleTab}>
          2º AMS
        </button>
        <button className="px-3 mt-5 overdue" onClick={handleTab}>
          3º AMS
        </button>
        {/* Nav Line */}
        <div className="absolute top-12 left-0 w-[80px] h-1 bg-highlighted transition-all"></div>
      </div>

      {/* Pending tasks */}
      <div className="static m-5 pending">
        {classesTasks[0].length === 0 ? (
          <span className="text-black/60">
            Essa turma não possui atividades
          </span>
        ) : (
          classesTasks[0].map((task) => {
            return (
              <Link
                href={`/coordenador-${coordinator}/atividades/${task.id}`}
                key={task.id}
              >
                <Task
                  name={task.titulo}
                  hours={task.horasAtividade}
                  dueDate={
                    new Date(task.prazoEntrega)
                      .toLocaleString('pt-BR')
                      .split(', ')[0]
                  }
                />
              </Link>
            )
          })
        )}
      </div>

      {/* Sent tasks */}
      <div className="invisible absolute w-0 sent">
        {classesTasks[1].length === 0 ? (
          <span className="text-black/60">
            Essa turma não possui atividades
          </span>
        ) : (
          classesTasks[1].map((task) => {
            return (
              <Link
                href={`/coordenador-${coordinator}/atividades/${task.id}`}
                key={task.id}
              >
                <Task
                  name={task.titulo}
                  hours={task.horasAtividade}
                  dueDate={
                    new Date(task.prazoEntrega)
                      .toLocaleString('pt-BR')
                      .split(', ')[0]
                  }
                />
              </Link>
            )
          })
        )}
      </div>

      {/* Overdue Tasks */}
      <div className="invisible absolute w-0 overdue">
        {classesTasks[2].length === 0 ? (
          <span className="text-black/30 block">
            Essa turma não possui atividades
          </span>
        ) : (
          classesTasks[2].map((task) => {
            return (
              <Link
                href={`/coordenador-${coordinator}/atividades/${task.id}`}
                key={task.id}
              >
                <Task
                  name={task.titulo}
                  hours={task.horasAtividade}
                  dueDate={
                    new Date(task.prazoEntrega)
                      .toLocaleString('pt-BR')
                      .split(', ')[0]
                  }
                />
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}
