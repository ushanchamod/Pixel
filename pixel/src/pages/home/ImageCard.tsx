import ImageListItem from '@mui/material/ImageListItem';
import { ImageDto } from '../../dto/image.dto';

interface ImageCardProps {
  item: ImageDto
}

const ImageCard = ({item}: ImageCardProps) => {
  return (
    <ImageListItem key={item.img}>
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