import React from 'react'
import "./Profile.css"
import { Autocomplete, Box, Button, Grid, Pagination, TextField, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CreateIcon from '@mui/icons-material/Create';
import WestIcon from '@mui/icons-material/West';
import userImage from '../../../images/user-img.jpg'
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';


const designations = [
  { label: 'Manager' },
  { label: 'CEO' },
  { label: 'Founter' },
  { label: 'UI/UX Designer' },
  { label: 'Web Developer' },
  { label: "HTML Developer" },
  { label: 'PHP Developer' },
];


const Profile = () => {
  return (
    <>
    <NavBar />
    <Box sx={{
        minHeight: 'calc(100vh - 80px)',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'scroll',
        padding: '20px',
      }}>
    <Box sx={{
      minHeight: 'calc(100vh - 120px)',
      backgroundColor: '#ffffff',
      borderRadius: '5px',
      border: '1px solid #dddddd',
      padding: '20px',
    }}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box sx={{
            position: 'relative',
            lineHeight: 0,
            width: '150px',
            height: '150px',
            margin: '0 auto 20px',
            '& label': {
              width: '30px',
              height: '30px',
              background: '#01a4ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '100%',
              position: 'absolute',
              bottom: '0px',
              cursor: 'pointer',
              right: '18px',
              '& svg': {
                color: '#ffffff',
                width: '18px',
              }
            },
            '& img': {
              width: '150px',
              height: '150px',
              borderRadius: '100%',
              border: '2px solid #1000C1',
            }
          }}>
            <img src={userImage} />
            <input id='update-profile' type='file' hidden />
            <label for="update-profile">
              <CreateIcon />
            </label>
          </Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={4}>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Employee ID"
                variant="outlined"
                defaultValue="12"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="First Name"
                variant="outlined"
                defaultValue="John"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Last Name"
                variant="outlined"
                defaultValue="wick"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Email ID"
                variant="outlined"
                defaultValue="johnwick@gmail.com"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Mobile Number"
                variant="outlined"
                defaultValue="9879878999"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Father's Name"
                variant="outlined"
                defaultValue="Jems Wick"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Mother's Name"
                variant="outlined"
                defaultValue="Rita Wick"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Date of Birth"
                variant="outlined"
                defaultValue="1st May 1992"
              />
            </Grid>
            <Grid item xl={6} lg={6} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                multiline
                label="Permanent Address"
                variant="outlined"
                defaultValue="Model Market, . Ext.110, Garki Ii, Abuja, Nigeria"
              />
            </Grid>
            <Grid item xl={6} lg={6} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                multiline
                label="Current Address"
                variant="outlined"
                defaultValue="Model Market, . Ext.110, Garki Ii, Abuja, Nigeria"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="Qualification"
                variant="outlined"
                defaultValue="MBA"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="BVN"
                variant="outlined"
                defaultValue="00000000"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <TextField
                sx={{
                  width: '100%',
                }}
                label="NIN"
                variant="outlined"
                defaultValue="00000000"
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Autocomplete
                defaultValue='Manager'
                disablePortal
                options={designations}
                renderInput={(params) => <TextField {...params} label="Designation" />}
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Autocomplete
                defaultValue='Banking'
                disablePortal
                options={designations}
                renderInput={(params) => <TextField {...params} label="Department" />}
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Autocomplete
                defaultValue='Paul Walker'
                disablePortal
                options={designations}
                renderInput={(params) => <TextField {...params} label="Reporting to" />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '10px 20px',
              '& button': {
                margin: '0 10px',
              }
            }}>
              <Button>
                Save
              </Button>
              <Button sx={{
                background: '#ffffff',
                boxShadow: 'none',
                color: '#000000',
                border: '1px solid #dddddd',
                '&:hover': {
                  background: '#ffffff',
                  boxShadow: 'none',
                  color: '#000000',
                }
              }}>
                Cancle
              </Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </>
  )
}

export default Profile