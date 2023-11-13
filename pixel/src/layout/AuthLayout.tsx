import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const path = window.location.pathname;
    if(path === '/auth/' || path === '/auth'){
      return navigate('/auth/login')
    }
  }, [])
  
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout