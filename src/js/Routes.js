import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Employees from './views/Employees/Employees';
import Login from './views/Login/Login';
import EmployeesDetails from './views/Employees/EmployeesDetails';
import AddEmployees from './views/Employees/AddEmployees';
import Profile from './views/Profile/Profile';
import Loans from './views/Loans/Loans';
import LoanDetails from './views/Loans/LoanDetails';
import Payroll from './views/Payroll/Payroll';
import Leaves from './views/Leaves/Leaves';
import Jobs from './views/Jobs/Jobs';
import UserRoles from './views/UserRoles/UserRoles';
import Notification from './views/Notification/Notification';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/employees-detail" element={<EmployeesDetails />} />
            <Route path="/employees/add-employee" element={<AddEmployees />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/loan-details" element={<LoanDetails />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/user-roles" element={<UserRoles />} />
            <Route path="/notification" element={<Notification />} />
        </Routes>
    )
}

export default AllRoutes