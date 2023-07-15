import React from 'react'
import "./LoanDetails.css"
import { Autocomplete, Box, Button, Grid, Pagination, TextField, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Modal from '@mui/material/Modal';
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


const LoanDetails = () => {
  const [reject, setReject] = React.useState(false);
  const rejectOpen = () => setReject(true);
  const rejectClose = () => setReject(false);
  const [approve, setApprove] = React.useState(false);
  const approveOpen = () => setApprove(true);
  const approveClose = () => setApprove(false);
  return (
    <>
    <NavBar />
    <Box sx={{
        minHeight: 'calc(100vh - 80px)',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'scroll',
        padding: '20px',
      }}>
      <Modal
        open={reject}
        onClose={rejectClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          maxWidth: 'calc(100vw - 30px)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          padding: '30px 20px',
        }}>
          <Box sx={{
            textAlign: 'center',
          }}>
            <HelpOutlineIcon color='warning' sx={{
              fontSize: '80px'
            }} />
          </Box>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Are you Sure?
          </Typography>
          <Typography sx={{
            textAlign: 'center',
            margin: '10px 0 20px 0'
          }}>
            Please select 'Yes' if you want to reject loan.
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& button': {
              minWidth: '100px',
              margin: '0 10px',
            }
          }}>
            <Button onClick={rejectClose} sx={{
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
              No
            </Button>
            <Button onClick={rejectClose}>Yes</Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={approve}
        onClose={approveClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          maxWidth: 'calc(100vw - 30px)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          padding: '30px 20px',
        }}>
          <Box sx={{
            textAlign: 'center',
          }}>
            <HelpOutlineIcon color='warning' sx={{
              fontSize: '80px'
            }} />
          </Box>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Are you Sure?
          </Typography>
          <Typography sx={{
            textAlign: 'center',
            margin: '10px 0 20px 0'
          }}>
            Please select 'Yes' if you want to approve loan.
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& button': {
              minWidth: '100px',
              margin: '0 10px',
            }
          }}>
            <Button onClick={approveClose} sx={{
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
              No
            </Button>
            <Button onClick={approveClose}>Yes</Button>
          </Box>
        </Box>
      </Modal>
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
              '& a': {
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#1000C1',
                },
                '& svg': {
                  marginRight: '5px',
                }
              }
            }}>
              <Link to='/loans'><WestIcon />Back to Loan List</Link>
            </Box>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px', }}>Customer Image</Typography>
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
            </Box>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <TextField
                  disabled
                  sx={{
                    width: '100%',
                  }}
                  label="Customer ID"
                  variant="outlined"
                  defaultValue="12"
                />
              </Grid>
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  disabled
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
                  disabled
                  defaultValue="wick"
                />
              </Grid>
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                  defaultValue="Rita Wick"
                />
              </Grid>
              <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  label="Date of Birth"
                  disabled
                  variant="outlined"
                  defaultValue="1st May 1992"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  label="Permanent Address"
                  multiline
                  disabled
                  variant="outlined"
                  defaultValue="Model Market, . Ext.110, Garki Ii, Abuja, Nigeria"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  label="Current Address"
                  multiline
                  disabled
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
                  disabled
                  defaultValue="MBA"
                />
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  disabled
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
                  disabled
                  variant="outlined"
                  defaultValue="00000000"
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
              <Button onClick={approveOpen}>
                Approve Loan
              </Button>
              <Button onClick={rejectOpen} sx={{
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
                Reject Loan
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </>
  )
}

export default LoanDetails