import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDsahboard from './components/Dashboard/EmployeeDsahboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider'
const App = () => {
  // useEffect(() => {
  //   setLocalStorage() 
  //   getLocalStorage()
  // })
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)


  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
   
    }else if(authData && authData.employees.find((e) => email == e.email && e.password == password)){
       setUser('employee')
        
    }
    else{
      alert('Invalid Creditials')
    }
  }
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDsahboard />  }
      
    </>
  )
}

export default App
