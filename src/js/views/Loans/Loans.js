import React from 'react'
import "./Loans.css"
import { Box, Button, Pagination, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Loans = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [reject, setReject] = React.useState(false);
  const rejectOpen = () => setReject(true);
  const rejectClose = () => setReject(false);
  const [approve, setApprove] = React.useState(false);
  const approveOpen = () => setApprove(true);
  const approveClose = () => setApprove(false);
  const [deleteloan, setDelete] = React.useState(false);
  const deleteOpen = () => setDelete(true);
  const deleteClose = () => setDelete(false);
  return (
    <>
      <NavBar title="Loans"/>
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
      <Modal
        open={deleteloan}
        onClose={deleteClose}
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
            Please select 'Yes' if you want to delete loan data.
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
            <Button onClick={deleteClose} sx={{
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
            <Button onClick={deleteClose}>Yes</Button>
          </Box>
        </Box>
      </Modal>
      <Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}>
          <Typography variant='h5'>Loans List</Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography sx={{
              marginRight: '15px',
            }}>
              Sort by:
            </Typography>
            <Tabs
              sx={{
                minHeight: 'auto',
                background: '#ffffff',
                borderRadius: '5px',
                padding: '5px',
                '& button': {
                  padding: '10px 10px',
                  minHeight: 'auto',
                  transition: 'all 0.3s ease 0s',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  position: 'relative',
                  zIndex: '1',
                  borderRadius: '5px',
                  '&.Mui-selected': {
                    color: '#ffffff',
                  }
                },
                '& .MuiTabs-indicator': {
                  height: '100%',
                  borderRadius: '5px',
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Active Loans" {...a11yProps(0)} />
              <Tab label="Requested Loan" {...a11yProps(1)} />
              <Tab label="Closed Loans" {...a11yProps(2)} />
              <Tab label="Forced Closed Loans" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{
            minHeight: 'calc(100vh - 240px)',
            maxHeight: 'calc(100vh - 240px)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #dddddd',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}>
            <table>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Customer Name</th>
                  <th>Loan Type</th>
                  <th>Loan Length</th>
                  <th className='action-box'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>Dummy Name</td>
                  <td>Personol Loan</td>
                  <td>12 Months</td>
                  <td className='action-box'>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      '& a + a': {
                        marginLeft: '10px',
                      },
                      '& a': {
                        padding: '0',
                        minWidth: 'auto',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#1000C1',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          width: '18px',
                          color: '#ffffff',
                        },
                      },
                      '& a.red-icon': {
                        background: '#c60101',
                      },
                      '& a.green-icon': {
                        background: 'green',
                      }
                    }}>
                      <Link className='edit-icon' to='/loans/loan-details'>
                        <VisibilityIcon />
                      </Link>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box sx={{
            marginTop: '20px',
          }}>
            <Pagination
              sx={{
                '& ul': {
                  justifyContent: 'center'
                }
              }}
              count={10} color="primary"
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{
            minHeight: 'calc(100vh - 240px)',
            maxHeight: 'calc(100vh - 240px)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #dddddd',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}>
            <table>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Customer Name</th>
                  <th>Loan Type</th>
                  <th>Loan Length</th>
                  <th className='action-box'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>Dummy Name</td>
                  <td>Personol Loan</td>
                  <td>12 Months</td>
                  <td className='action-box'>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      '& a + a': {
                        marginLeft: '10px',
                      },
                      '& a': {
                        padding: '0',
                        minWidth: 'auto',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#1000C1',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          width: '18px',
                          color: '#ffffff',
                        },
                      },
                      '& a.red-icon': {
                        background: '#c60101',
                      },
                      '& a.green-icon': {
                        background: 'green',
                      }
                    }}>
                      <Link className='red-icon' onClick={rejectOpen}>
                        <CloseIcon />
                      </Link>
                      <Link className='green-icon' onClick={approveOpen}>
                        <CheckIcon />
                      </Link>
                      <Link className='edit-icon' to='/loans/loan-details'>
                        <VisibilityIcon />
                      </Link>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box sx={{
            marginTop: '20px',
          }}>
            <Pagination
              sx={{
                '& ul': {
                  justifyContent: 'center'
                }
              }}
              count={10} color="primary"
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box sx={{
            minHeight: 'calc(100vh - 240px)',
            maxHeight: 'calc(100vh - 240px)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #dddddd',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}>
            <table>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Customer Name</th>
                  <th>Loan Type</th>
                  <th>Loan Length</th>
                  <th className='action-box'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>Dummy Name</td>
                  <td>Personol Loan</td>
                  <td>12 Months</td>
                  <td className='action-box'>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      '& a + a': {
                        marginLeft: '10px',
                      },
                      '& a': {
                        padding: '0',
                        minWidth: 'auto',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#1000C1',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          width: '18px',
                          color: '#ffffff',
                        },
                      },
                      '& a.red-icon': {
                        background: '#c60101',
                      },
                      '& a.green-icon': {
                        background: 'green',
                      }
                    }}>
                      <Link className='red-icon' onClick={deleteOpen}>
                        <DeleteIcon />
                      </Link>
                      <Link className='edit-icon' to='/loans/loan-details'>
                        <VisibilityIcon />
                      </Link>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box sx={{
            marginTop: '20px',
          }}>
            <Pagination
              sx={{
                '& ul': {
                  justifyContent: 'center'
                }
              }}
              count={10} color="primary"
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box sx={{
            minHeight: 'calc(100vh - 240px)',
            maxHeight: 'calc(100vh - 240px)',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #dddddd',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}>
            <table>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Customer Name</th>
                  <th>Loan Type</th>
                  <th>Loan Length</th>
                  <th className='action-box'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>Dummy Name</td>
                  <td>Personol Loan</td>
                  <td>12 Months</td>
                  <td className='action-box'>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      '& a + a': {
                        marginLeft: '10px',
                      },
                      '& a': {
                        padding: '0',
                        minWidth: 'auto',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#1000C1',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          width: '18px',
                          color: '#ffffff',
                        },
                      },
                      '& a.red-icon': {
                        background: '#c60101',
                      },
                      '& a.green-icon': {
                        background: 'green',
                      }
                    }}>
                      <Link className='red-icon' onClick={deleteOpen}>
                        <DeleteIcon />
                      </Link>
                      <Link className='edit-icon' to='/loans/loan-details'>
                        <VisibilityIcon />
                      </Link>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box sx={{
            marginTop: '20px',
          }}>
            <Pagination
              sx={{
                '& ul': {
                  justifyContent: 'center'
                }
              }}
              count={10} color="primary"
            />
          </Box>
        </CustomTabPanel>
      </Box>
      </Box>
    </>
  )
}

export default Loans