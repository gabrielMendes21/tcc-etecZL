'use client'

import H1 from '@/components/H1'
import Link from 'next/link'
import Task from '@/components/Task'
import Main from '@/components/Main'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Atividades() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Main>
      <H1 title="Atividades" />

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Pendentes" {...a11yProps(0)} />
          <Tab label="Entregues" {...a11yProps(1)} />
          <Tab label="Enviadas" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Pending Activities */}
      <CustomTabPanel value={value} index={0}>
        <Link href="atividades/pre-projeto" className="block mb-5">
          <Task name="Pre-projeto" hours={2} dueDate="19/05/2023" />
        </Link>
        <Task name="Skills Build" hours={30} dueDate="25/06/2023" />
      </CustomTabPanel>

      {/* Sent Activities */}
      <CustomTabPanel value={value} index={1}>
        <Task name="Pitch de apresentação" hours={1} dueDate="19/05/2023" />
        <span className="block my-5"></span>
        <Task name="Cursos DIO" hours={1} dueDate="05/12/2023" />
      </CustomTabPanel>

      {/* Overdue Activities */}
      <CustomTabPanel value={value} index={2}>
        <Task name="Webinar" hours={20} dueDate="20/20/2023" />
        <span className="block my-5"></span>
        <Task name="Palestra" hours={0.5} dueDate="16/11/2023" />
      </CustomTabPanel>
    </Main>
  )
}
