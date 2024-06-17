import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

function Authenticated({children}) {
  const {isAuthenticated}=useAuth()
  if(isAuthenticated==true)
    {
        return children
    }
    
    return <Navigate to="/login"/>
}

export default Authenticated