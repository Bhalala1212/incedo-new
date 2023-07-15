import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
const NavBar = (props) => {
  const {title=''}=props
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 20px',
      background: '#ffffff',
      border: '1px solid #e8eaf2',
      position: 'sticky',
      top: 0,
      zIndex: 9,
    }}>
      <Typography variant='h1'>
        {title}
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Box sx={{
          marginRight: '10px',
          paddingRight: '10px',
          borderRight: '1px solid #dddddd',
          '& a': {
            '&:hover svg': {
              color: 'secondary.main',
            }
          }
        }}>
          <Link to='/notification'>
            <NotificationsIcon sx={{color: '#1e2538'}} />
          </Link>
        </Box>
        <Link to="/profile">
          <Avatar
            sx={{
              backgroundColor: 'secondary.main',
              fontSize: '16px',
            }}
          >
            AB
          </Avatar>
        </Link>
      </Box>
    </Box>
  )
}

export default NavBar