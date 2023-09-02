'use client'

import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export default function NavTabs() {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="Activities tabs" onChange={handleChange}>
            <Tab label="Pendentes" value="1" />
            <Tab label="Entregues" value="2" />
            <Tab label="Enviadas" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Pendentes</TabPanel>
        <TabPanel value="2">Entregues</TabPanel>
        <TabPanel value="3">Enviadas</TabPanel>
      </TabContext>
    </Box>
  )
}
