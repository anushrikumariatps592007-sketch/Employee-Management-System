import React, { useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDsahboard from './components/Dashboard/EmployeeDsahboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  useEffect(() => {
    setLocalStorage() 
    getLocalStorage()
  })
  
  return (
    <>
      <Login />
      {/* <EmployeeDsahboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
