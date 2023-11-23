// Genal imports
import { useState, Suspense, lazy } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// MUI

// Context
import { ImagePopupContext } from './state/contax/ImagePopupContext'
import { imagePopUpContext } from './dto/image.dto'

// Pages
import MainLayout from './layout/MainLayout'
const Home = lazy(() => import('./pages/home/Home'))
const Category = lazy(() => import('./pages/category/Category'))
const AuthLayout = lazy(() => import('./layout/AuthLayout'))
const Login = lazy(() => import('./pages/auth/login/Login'))
const Register = lazy(() => import('./pages/auth/register/Register'))


const Loading = () => {
  return (
    <div>Loading...</div>
  )

}

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Loading />}><Home /></Suspense>
      },
      {
        path: '/category/:categoryName',
        element: <Suspense fallback={<Loading />}><Category /></Suspense>
      }
    ]
  },

  {
    path: '/auth',
    element: <Suspense fallback={<Loading />}><AuthLayout /></Suspense>,
    children: [
      {
        path: '/auth/login',
        element: <Suspense fallback={<Loading />}><Login /></Suspense>
      },
      {
        path: '/auth/register',
        element: <Suspense fallback={<Loading />}><Register /></Suspense>
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