import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const Protectedroute = () => {
  const useAuth = () => {
    const token = localStorage.getItem('token');
    if (token === 'true') {
      return true;
    }
    else {
      return false;
    }
  }
  const auth = useAuth();
  return (
    <div>{auth ? <Outlet /> : <Navigate to="/" />}</div>
  )
}

export default Protectedroute