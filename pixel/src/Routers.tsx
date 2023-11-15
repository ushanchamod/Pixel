import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/auth/login/Login'
import Category from './pages/category/Category'
import { ImagePopupContext } from './state/contax/ImagePopupContext'
import { useState } from 'react'
import { imagePopUpContext } from './dto/image.dto'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:categoryName',
        element: <Category />
      }
    ]
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      }
    ]
  }

])

const Routers = () => {
  const [imagePopup, setImagePopup] = useState<imagePopUpContext>({
    id: -999,
    open: false,
  })
  return (
    <>
    <ImagePopupContext.Provider value={{imagePopup, setImagePopup}}>
      <RouterProvider router={router} />
    </ImagePopupContext.Provider>
    </>
  )
}

export default Routers