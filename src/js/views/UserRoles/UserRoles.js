import React from 'react'
import "./UserRoles.css"
import { Box, Button, Pagination, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NavBar from '../../components/NavBar/NavBar';
const UserRoles = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        minHeight: 'calc(100vh - 171px)',
        maxHeight: 'calc(100vh - 171px)',
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                  }
                }}>
                  <FormControl sx={{ minWidth: 170 }} size="small">
                    <InputLabel>Provide Role</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      value={age}
                      label="Provide Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Sales</MenuItem>
                      <MenuItem value={30}>HR</MenuItem>
                    </Select>
                  </FormControl>
                  <Button sx={{
                    padding: '5px 20px',
                    marginLeft: '15px',
                  }}>
                    Save
                  </Button>
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
    </>
  )
}

export default UserRoles