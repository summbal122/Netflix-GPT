
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({posterPath}) => {

  return (
    <div>
      <img 
      className='w-36'
      src= {IMG_CDN_URL+posterPath}
      alt="movie poster"/>
    </div>
  )
}

export default MovieCard;
