
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({posterPath}) => {
if(!posterPath) return null;
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
