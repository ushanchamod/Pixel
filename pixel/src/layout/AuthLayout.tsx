import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Image from '../assets/hard_coded_images/login_background.jpg'
import './style.scss'

const AuthLayout = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const path = window.location.pathname;
    if(path === '/auth/' || path === '/auth'){
      return navigate('/auth/login')
    }
  }, [])
  
  return (
    <div id='auth_layout'>
      <div className="background"> <img src={Image} alt="background_image" /></div>
      <div className="outlet"><Outlet /></div>
    </div>
  )
}

export default AuthLayout