import Avatar from '@mui/material/Avatar';
import { HiOutlineDownload } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { ImageDto } from '../../dto/image.dto';
import { useEffect, useState } from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import { FaAngleDown } from "react-icons/fa";



const ImagePopupTopBar = () => {
  const[heart, setHeart] = useState(true)

  return (
    <div className="top-bar">
      <div className="left">
        <Avatar className='avatar' alt="Ushan" src="#" />
        <div className="name-with-heart">
          <p className='name'>Ushan</p>
          <p className='description'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      
      
      <div className="right">
        <div className={heart ? "heart red-heart" : "heart"} onClick={() => setHeart(prv => !prv)}>
          <FaHeart className='icon' />
        </div>

        <div className="download">
        <button className='download-free'>Download Free</button>
          <BasicPopover />
        </div>
      </div>
    </div>
  )
}



const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button onClick={handleClick} className='download-drop'><FaAngleDown className='icon' /></button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button variant="text" size='small' sx={{width: '100%'}}><Typography sx={{ p: 1, cursor:'pointer' }}>Small <span>(640 x 426)</span></Typography></Button>
        <Divider />
        <Button variant="text" size='small' sx={{width: '100%'}}><Typography sx={{ p: 1, cursor:'pointer' }}>Medium <span>(1920 x 1280)</span></Typography></Button>
        <Divider />
        <Button variant="text" size='small' sx={{width: '100%'}}><Typography sx={{ p: 1, cursor:'pointer' }}>Large <span>(2400 x 1600)</span></Typography></Button>
        <Divider />
        <Button variant="text" size='small' sx={{width: '100%'}}><Typography sx={{ p: 1, cursor:'pointer' }}>Original Size <span>(1500 x 1600)</span></Typography></Button>             
      </Popover>
    </div>
  );
}

export default ImagePopupTopBar