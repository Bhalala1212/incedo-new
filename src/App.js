import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter ,useLocation} from 'react-router-dom';
import Routes from './js/Routes';
import NavBar from './js/components/NavBar/NavBar';
import { Provider } from 'react-redux'
import store from './js/store/store';
import { Box, Typography } from '@mui/material';
import Sidebar from './js/components/SideBar/NavBar';


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
       
          <Box sx={{
            background: '#F2F4F9',
            minHeight: '100vh',
            display: 'flex',
            // padding: '0 0 0 100px'
          }}>
          {(window.location.pathname!='/login' && window.location.pathname!='/register')  && <Sidebar />}
            {/* <NavBar /> */}
            <Box
              sx={{ 
                width: '100%',
              }}
            >
              <Routes />
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App