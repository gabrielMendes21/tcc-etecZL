'use client'

import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Link from 'next/link'
import Task from './Task'

export default function TasksTab({ pendingTasks, sentTasks, overdueTasks }) {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            width: {
              xs: '99%', // 0px => 599px
              sm: '100%', // 600px => 899px
              xl: '100%', // 1536px
            },
          }}
        >
          <TabList
            aria-label="Activities tabs"
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
          >
            <Tab label="Pendentes" value="1" />
            <Tab label="Entregues" value="2" />
            <Tab label="Atrasadas" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {pendingTasks.length === 0 ? (
            <span>Você não possui atividades pendentes</span>
          ) : (
            pendingTasks.map((task) => {
              return (
                <Link href={`/aluno/atividades/${task.id}`} key={task.id}>
                  <Task
                    name={task.atividade.titulo}
                    hours={task.atividade.horasAtividade}
                    dueDate={
                      new Date(task.atividade.prazoEntrega)
                        .toLocaleString('pt-BR')
                        .split(', ')[0]
                    }
                  />
                </Link>
              )
            })
          )}
        </TabPanel>
        <TabPanel value="2">
          {sentTasks.length === 0 ? (
            <span>Você não possui atividades pendentes</span>
          ) : (
            sentTasks.map((task) => {
              return (
                <Link href={`/aluno/atividades/${task.id}`} key={task.id}>
                  <Task
                    name={task.atividade.titulo}
                    hours={task.atividade.horasAtividade}
                    dueDate={
                      new Date(task.atividade.prazoEntrega)
                        .toLocaleString('pt-BR')
                        .split(', ')[0]
                    }
                  />
                </Link>
              )
            })
          )}
        </TabPanel>
        <TabPanel value="3">
          {overdueTasks.length === 0 ? (
            <span>Você não possui atividades atrasadas</span>
          ) : overdueTasks.length === 0 ? (
            <span className="text-black/30 block">
              Você não possui nenhuma atividade atrasada
            </span>
          ) : (
            overdueTasks.map((task) => {
              return (
                <Link href={`/aluno/atividades/${task.id}`} key={task.id}>
                  <Task
                    name={task.atividade.titulo}
                    hours={task.atividade.horasAtividade}
                    dueDate={
                      new Date(task.atividade.prazoEntrega)
                        .toLocaleString('pt-BR')
                        .split(', ')[0]
                    }
                  />
                </Link>
              )
            })
          )}
        </TabPanel>
      </TabContext>
    </Box>
  )
}
