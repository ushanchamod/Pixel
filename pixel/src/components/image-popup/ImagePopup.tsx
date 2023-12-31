import { useContext, useEffect, useState } from 'react';
import ImagePopupTopBar from './ImagePopupTopBar'
import { FaMaximize, FaMinimize } from "react-icons/fa6";
import './style.scss'
import PopupImageGrid from './PopupImageGrid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ImagePopupContext } from '../../state/contax/ImagePopupContext';

const ImagePopupClean = () => {
  const {imagePopup, setImagePopup} = useContext(ImagePopupContext)

  const[maximize, setMaximize] = useState(false)

  useEffect(() => {
    console.log("ID: ", imagePopup.id);
    
  }, [imagePopup.id])
  return (
    <div id="image-popup-container">
      <HighlightOffIcon className='popup-close' onClick={() => setImagePopup({id: -999, open: false})} />
      {maximize && (
        <div className='full-screen-image-popup'>
          <FaMinimize className='minimize-icon' onClick={() => setMaximize(false)} />
          <img src="https://picsum.photos/200/500" alt="image-popup" className='full-screen' />
        </div>
      )}
      <div className="card">
        <div className="top-bar-popup">
        <HighlightOffIcon className='popup-close-mobile' onClick={() => setImagePopup({id: -999, open: false})} />
          <ImagePopupTopBar />
        </div>

        <div className="image-container">
          <span>
            <FaMaximize className='maximize-icon' onClick={() => setMaximize(true)} />
            <img src="https://picsum.photos/720/500" alt="image-popup" className='full-screen' />
          </span>
        </div>

        <div className="image-details">
          
          <div className="views-and-download">
            <div className="views">
              <label>Views</label>
              <label className='amount'>24,500</label>
            </div>

            <div className="download">
              <label>Download</label>
              <label className='amount'>1250</label>
            </div>
          </div>

          <div className="img-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nisi ea laboriosam, repellendus cumque unde adipisci quae officia laudantium possimus rerum cum eum. Deserunt doloremque nihil nemo cupiditate saepe tempora?
          </div>

          <ul className="category-tag-list">
            <li className='category-title'>Category 1</li>
            <li className='category-title'>Category 1</li>
            <li className='category-title'>Category 1</li>
            <li className='category-title'>Category 1</li>
          </ul>

          <div className="related-other-image">
            <h2 className='title'>Related photos</h2>
            <PopupImageGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePopupClean