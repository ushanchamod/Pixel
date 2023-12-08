import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import './style.scss'
import TextField from '@mui/material/TextField';

const TopBar = () => {
  return (
    <div id='top-bar-container'>
      <div className="left">
        <div className="logo-and-search">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Google-Photos_icon_logo_%28May-September_2015%29.png/1280px-Google-Photos_icon_logo_%28May-September_2015%29.png" alt="" />
            <p>Pixel</p>
          </div>

          <div className="search">
            <SearchBar />
          </div>

          {/* <div className="nav-link">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/category'>Category</NavLink>
            <NavLink to='/profile'>Profile</NavLink>

          </div> */}
        </div>
      </div>

      <div className="right">
        Login
      </div>
    </div>
  )
}

export default TopBar