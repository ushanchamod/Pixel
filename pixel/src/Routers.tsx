import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/auth/login/Login'
import ImagePopup from './components/image-popup/ImagePopup'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
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
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default Routers