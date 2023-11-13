import {Outlet} from 'react-router-dom'
import TopBar from '../components/top-bar/TopBar'

const MainLayout = () => {
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
      </nav>
      
      <main style={{overflowY: 'auto', boxSizing: 'border-box'}}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout