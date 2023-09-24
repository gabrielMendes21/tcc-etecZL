'use client'

import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

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
        <TabPanel value="1">Pendentes</TabPanel>
        <TabPanel value="2">Entregues</TabPanel>
        <TabPanel value="3">Atrasadas</TabPanel>
      </TabContext>
    </Box>
  )
}
