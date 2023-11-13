import './style.scss'
import HomeGrid from './HomeGrid'
import ImagePopup from '../../components/image-popup/ImagePopup'

const Home = () => {
  return (
    <div id='app-home'>
      <ImagePopup />
      <HomeGrid />
    </div>
  )
}

export default Home