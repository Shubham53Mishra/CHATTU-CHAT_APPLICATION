/* eslint-disable no-unused-vars */
import { AppBar, Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return  <>
  <Box sx={{flexGrow:1}} height={"4rem"}>
    <AppBar position="static" sx={
      {
        bgcolor:"#ea7070"
      }
    }/>

  </Box>
  </>
}

export default Header