import React from 'react'
import "./Employees.css"
import { Box, Button, Pagination, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CreateIcon from '@mui/icons-material/Create';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
const Employees = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        open={open}
        onClose={handleClose}
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
            Please select 'Yes' if you want to delete employee.
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
            <Button onClick={handleClose} sx={{
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
            <Button onClick={handleClose}>Yes</Button>
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
          <Typography variant='h5'>Employees List</Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography sx={{
              marginRight: '15px',
            }}>
              Sort by:
            </Typography>
            <FormControl size="small">
              <InputLabel id="demo-select-small-label">Sort by</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Sort by"
                onChange={handleChange}
                sx={{
                  minWidth: '180px',
                  '& .MuiSelect-select': {
                    background: '#ffffff',
                  }
                }}
              >
                <MenuItem value={10}>Employee ID</MenuItem>
                <MenuItem value={20}>Employee Name</MenuItem>
                <MenuItem value={30}>Employee Department</MenuItem>
                <MenuItem value={40}>Employee Designation</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{
              '& a': {
                minWidth: '100px',
                border: '1px solid #0b0087',
                color: '#ffffff',
                marginLeft: '10px',
                padding: '9px 20px',
                backgroundColor: '#1000C1',
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                fontWeight: '600',
                fontSize: '15px',
                borderRadius: '5px',
                textTransform: 'capitalize',
              }
            }}>
              <Link to='/employees/add-employee'>
                Add Employee
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          minHeight: 'calc(100vh - 231px)',
          maxHeight: 'calc(100vh - 231px)',
          backgroundColor: '#ffffff',
          borderRadius: '5px',
          border: '1px solid #dddddd',
          overflow: 'hidden',
          overflowY: 'scroll',
        }}>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee Department</th>
                <th>Employee Designation</th>
                <th className='action-box'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
                    </Link>
                  </Box>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Abhishek Bhalala</td>
                <td>UI/UX Department</td>
                <td>Team Leader</td>
                <td className='action-box'>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '& .edit-icon': {
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
                      }
                    },
                    '& .delete-icon': {
                      padding: '0',
                      marginRight: '15px',
                      minWidth: 'auto',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#c60101',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '18px',
                        color: '#ffffff',
                      }
                    }
                  }}>
                    <Link className='delete-icon' onClick={handleOpen}>
                      <DeleteIcon />
                    </Link>
                    <Link className='edit-icon' to='/employees/employees-detail'>
                      <CreateIcon />
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
      </Box>
      </Box>
    </>
  )
}

export default Employees