import React from 'react'
import "./Leaves.css"
import { Box, Button, Typography } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

const Leaves = () => {
  return (
    <>
    <NavBar />
    <Box sx={{
        minHeight: 'calc(100vh - 80px)',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'scroll',
        padding: '20px',
      }}>
      <Typography variant="h4" sx={{ color: 'secondary.main' }}>
      Leaves
      </Typography>
    </Box>
    </>
  )
}

export default Leaves