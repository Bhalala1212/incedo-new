import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import Setting from '../../../images/logo.png'

const Sidebar = () => {
  const location=useLocation()
  console.log("location===>",location)
  return (
    <>
      <Box sx={{width: '100px', minWidth: '100px'}}></Box>
      <Box sx={{
        width: '100px',
        position: 'fixed',
        background: '#ffffff',
        left: 0,
        top: 0,
        zIndex: 9,
        border: '1px solid #e8eaf2',
      }}>
        <Box sx={{
          textAlign: 'center',
          padding: '15px 0 30px 0',
          '& img': {
            width: '80px',
          }
        }}>
          <Link to="/"><img src={Setting} /></Link>
        </Box>
        <Box sx={{
          minHeight: 'calc(100vh - 105px)',
          maxHeight: 'calc(100vh - 105px)',
          overflowY: 'scroll',
        }}>
          <Box sx={{
            '& a': {
              textAlign: 'center',
              color: '#4e525f',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '12px',
              padding: '10px',
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '3px',
                background: 'transparent',
              },
              '&.active:before': {
                background: '#1700cc',
              },
              '&:hover:before': {
                background: '#1700cc',
              },
              '&:hover': {
                color: '#1700cc',
                '& svg': {
                  '& path': {
                    fill: '#1700cc',
                  }
                }
              },
              '& svg': {
                width: '17px',
                marginBottom: '10px',
                '& path': {
                  fill: '#4e525f',
                }
              },
              '&.active': {
                color: '#1700cc',
                '& svg': {
                  '& path': {
                    fill: '#1700cc',
                  }
                },
              },
            },
            '& a + a': {
              marginTop: '10px',
            }
          }}>
            <Link to="/" className={location.pathname=='/'?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M2 2.002h14.222v14.22H2V2v.002zm0 17.774h14.222v14.222H2V19.776zM19.778 2.003H34v14.221H19.778V2v.003zm0 17.774H34V34H19.778V19.777z" fill="#73788B"></path>
              </svg>
              Dashboard
            </Link>
            <Link to="/employees"  className={(location.pathname=='/employees'||location.pathname=='/employees/employees-detail'||location.pathname=='/employees/add-employee')?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M6 34a12.29 12.29 0 013.515-8.62A11.906 11.906 0 0118 21.81c3.183 0 6.235 1.284 8.485 3.57A12.29 12.29 0 0130 34H6zm12-13.714c-4.973 0-9-4.092-9-9.143C9 6.09 13.027 2 18 2s9 4.091 9 9.143c0 5.051-4.027 9.143-9 9.143z" fill="#73788B"></path>
              </svg>
              Employees
            </Link>
            <Link to="/loans"  className={(location.pathname=='/loans'||location.pathname=='/loans/loan-details')?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M25.31 8.42H31l-6-5.88v5.58c.01.17.14.3.31.3z" fill="#73788B"></path>
                <path class="u_fill" d="M25.3 10.3c-1.2 0-2.17-.98-2.17-2.18V2H7.51C5.57 2 4 3.57 4 5.5v25C4 32.43 5.57 34 7.51 34h20.54c1.93 0 3.51-1.57 3.51-3.5V10.3H25.3zm.21 15.3h-15.2v-1.89h15.2v1.89zm0-4.74h-15.2v-1.89h15.2v1.89zm0-4.74h-15.2v-1.89h15.2v1.89z" fill="#73788B"></path>
              </svg>
              Loans
            </Link>
            <Link to="/payroll"  className={location.pathname=='/payroll'?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
              <path class="u_fill" d="M33.843 27.005c-.02-.027-2.11-2.715-2.79-4.863-.16-.512-.362-1.232-.593-2.059-1.104-3.948-2.11-7.309-3.223-8.423-.846-.845-3.335-1.485-5.465-1.9a.725.725 0 00-.859.717v5.266c0 .258.068.521.2.744.58.985 1.1 1.564 1.365 1.676a.73.73 0 01-.56 1.342c-1.192-.497-2.456-2.75-3.241-4.693-.127-.315-.473-.875-.769-1.312-.917-1.305-2.4-2.793-3.742-3.067-.697-.142-1.312.03-1.781.5-1.752 1.75-.749 4.729.643 6.747 1.113 1.616 1.94 3.523 2.057 4.748.018.205.029.398.036.589.05 1.05.101 2.137 1.555 4.137.783 1.074 1.801 1.69 2.88 2.347 1.478.896 3.009 1.824 4.346 4.122a.746.746 0 00.627.377c6.932.008 9.396-6.222 9.421-6.286a.726.726 0 00-.107-.71zM4.601 2.137a.724.724 0 00-.663-.09A2.94 2.94 0 002 4.807v20.576a2.94 2.94 0 001.938 2.763.722.722 0 00.89-.356.738.738 0 00.08-.337V2.74a.738.738 0 00-.307-.604v.001z" fill="#73788B"></path><path class="u_fill" d="M13.68 23.09a9.678 9.678 0 00-.033-.52c-.062-.669-.596-2.304-1.805-4.057-.55-.797-1.83-2.898-1.83-5.156 0-1.367.468-2.556 1.356-3.444.807-.807 1.938-1.134 3.098-.898 1.1.225 2.317 1.01 3.46 2.216v-.006c.013.011.022.025.032.036l.034.032v.007a13.52 13.52 0 011.465 1.924V4.91A2.913 2.913 0 0016.547 2h-8a.727.727 0 00-.728.729v24.727c0 .403.325.729.729.729h5.721a.729.729 0 00.622-1.108c-1.024-1.68-1.157-2.845-1.21-3.988z" fill="#73788B"></path>
              </svg>
              Payroll
            </Link>
            <Link to="/leaves"  className={location.pathname=='/leaves'?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M7.563 34c-.415 0-.812-.169-1.105-.469A1.62 1.62 0 016 32.4V3.6c0-.424.165-.831.458-1.131.293-.3.69-.469 1.104-.469h21.875c.415 0 .812.169 1.105.469.293.3.458.707.458 1.131v28.8c0 .424-.165.831-.458 1.131-.293.3-.69.469-1.105.469H7.563zm15.625-9.6L31 18l-7.813-6.4v4.8h-9.375v3.2h9.376v4.8z" fill="#73788B"></path>
              </svg>
              Leaves
            </Link>
            <Link to="/jobs"  className={location.pathname=='/jobs'?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M17.232 21.224v11.683H4a11.785 11.785 0 013.982-8.832 11.76 11.76 0 019.25-2.851zm-1.47-1.563c-4.874 0-8.822-3.952-8.822-8.83C6.94 5.95 10.888 2 15.761 2c4.874 0 8.822 3.952 8.822 8.83 0 4.88-3.948 8.83-8.822 8.83zm8.516 10.175l5.197-5.202 2.08 2.08L24.279 34l-5.198-5.204 2.08-2.081 3.117 3.122h.001z" fill="#73788B"></path>
              </svg>
              Jobs
            </Link>
            <Link to="/user-roles" className={location.pathname=='/user-roles'?'active':''}>
              <svg width="17" height="17" viewBox="0 0 36 36" fill="none">
                <path class="u_fill" d="M11.2 22.4c0-1.293.506-2.534 1.406-3.448A4.763 4.763 0 0 1 16 17.524c1.273 0 2.494.514 3.394 1.428A4.916 4.916 0 0 1 20.8 22.4h-9.6Zm4.8-5.486c-1.989 0-3.6-1.636-3.6-3.657 0-2.02 1.611-3.657 3.6-3.657s3.6 1.637 3.6 3.657-1.611 3.657-3.6 3.657Z" fill="#73788B"></path><path class="u_fill" d="M32 16a16 16 0 1 1-9.723-14.717l-2.206 5.17A10.379 10.379 0 1 0 26.38 16H32Z" fill="#73788B"></path><path class="u_fill" d="M26.308 3.763a16 16 0 0 1 5.226 8.404l-5.457 1.347a10.38 10.38 0 0 0-3.39-5.452l3.62-4.3Z" fill="#73788B"></path>
              </svg>
              User Roles
            </Link>
          </Box>
        </Box>
      </Box>
      </>
  )
}

export default Sidebar