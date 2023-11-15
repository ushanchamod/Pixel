import {Outlet, useNavigate} from 'react-router-dom'
import TopBar from '../components/top-bar/TopBar'
import { useContext, useEffect, useState } from 'react'
import HomeNavCategory from '../components/top-bar/HomeNavCategory'
import { ImagePopupContext } from '../state/contax/ImagePopupContext'
import { imagePopUpContext } from '../dto/image.dto'
// import ImagePopup from '../../components/image-popup/ImagePopup'
import ImagePopup from '../components/image-popup/ImagePopup'

const MainLayout = () => {
  const {imagePopup} = useContext(ImagePopupContext)

  const[homeCategoryDisplay, setHomeCategoryDisplay] = useState<boolean>(false);

  
  useEffect(() => {
    const path = window.location.pathname;
    if(path === '/' || path === ''){
      setHomeCategoryDisplay(true)
    }
    else{
      setHomeCategoryDisplay(false)
    }
  }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <nav>
        <TopBar />
        {
          homeCategoryDisplay && (<HomeNavCategory />)
        }
      </nav>
      
      <main style={{overflowY: 'auto', boxSizing: 'border-box'}}>
          {(imagePopup.open && imagePopup.id !== -999) && <ImagePopup />}
          <Outlet />
      </main>
    </div>
  )
}

export default MainLayout