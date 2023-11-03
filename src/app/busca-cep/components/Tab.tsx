import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import District from './District'
import Cities from './Cities'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'transparent',
          justifyContent: 'center',
          display: 'flex'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: 'white' }}
            label="Pesquisa de cidades"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ color: 'white' }}
            label="Municípios por estado"
            {...a11yProps(1)}
          />
          {/* <Tab sx={{ color: 'white' }} label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <District />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Cities />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  )
}
