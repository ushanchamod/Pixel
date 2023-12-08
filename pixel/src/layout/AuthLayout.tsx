import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Image from '../assets/hard_coded_images/login_background.jpg'
import BackgroundVideo from '../assets/video/nature_animation_video.mp4'
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
      <div className="background">
        <video autoPlay={true} muted playsInline loop >
          <source src={BackgroundVideo} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <div className="outlet-container">
        <div className="outlet"><Outlet /></div>
      </div>
    </div>
  )
}

export default AuthLayout