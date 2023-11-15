import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import { HiOutlineDownload } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { ImageDto } from '../../dto/image.dto';
import { useContext, useEffect, useState } from 'react';
import { ImagePopupContext } from '../../state/contax/ImagePopupContext';

interface ImageCardProps {
  item: ImageDto
}

const ImageCard = ({item}: ImageCardProps) => {

  const {setImagePopup} = useContext(ImagePopupContext)

  const[like, setLike] = useState<boolean | null>()
  const[imageController, setImageController] = useState<boolean>(true)

  const checkDivWidth = () => {
    const card = document.getElementById('image-card');

    if(card) {
      const width = card.offsetWidth;
      if(width < 210) {
        setImageController(false)
      } else {
        setImageController(true)
      }
    }
  }

  

  useEffect(() => {
    setLike(false)

    window.addEventListener('resize', () => {
      checkDivWidth()
    })

    return () => {
      window.removeEventListener('resize', () => {})
    }

  },[])

  const clickMask = (id: number) => {
    setImagePopup({id, open: true})
  }

  if(typeof(like) !== 'undefined') return (
    <ImageListItem id='image-card'>
      <div className="mask1" onClick={() => clickMask(Math.random())}></div>

      <div className="make-heart">
        <FaHeart className={like ? "icon icon-highlight" : "icon icon-dark"} onClick={() => setLike(prv => !prv)} />
      </div>

      {imageController && (<div className="mask2">
        <div className="user">
          <Avatar className='avatar' alt="Ushan" src="#" />
          <div className="name-with-heart">
            <p className='name'>Ushan</p>
            <p className='heart'><span><FaHeart className="icon" /></span>1500</p>
          </div>
        </div>
        <div className="download-icon">
          <HiOutlineDownload className="icon" />
        </div>
      </div>)}

      <img
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  )
}

export default ImageCard