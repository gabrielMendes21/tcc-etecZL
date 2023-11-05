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

  function removeRepeatedTasks(array, propriedade) {
    return new Set(array.map((item) => item[propriedade]))
  }

  return (
    <div>
      {/* Create a nav button for each class */}
      <div className="relative">
        {classesTasks.map((classTask) => {
          return (
            <button className={`px-3 mt-5 ${classTask.id}`} onClick={handleTab}>
              {classTask.nomeTurma}
            </button>
          )
        })}
        {/* Nav Line */}
        <div className="absolute top-12 left-0 w-[110px] h-1 bg-highlighted transition-all"></div>
      </div>

      {/* {console.log(classesTasks)} */}

      {/* Get the set of tasks for each class */}
      {classesTasks.map((classTask) => {
        let tasks = []
        classTask.Usuario.map((student) => {
          return student.Entrega.map((task) => {
            return tasks.push(task.atividade)
          })
        })
        const tasksId = removeRepeatedTasks(tasks, 'id')

        tasks = [...tasksId].map((id) => {
          return tasks.find((item) => item.id === id)
        })

        return (
          <div className={`static m-5 ${classTask.id}`}>
            {tasks.map((task) => {
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
            })}
          </div>
        )
      })}
    </div>
  )
}
