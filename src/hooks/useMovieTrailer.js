import  { useEffect } from 'react';
import { API_OPTIONS } from '../utils/Constants';
import { addTrailer } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';


const useMovieTrailer = (id) => {

 const dispatch = useDispatch();

  const getMovieVideos  = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=b7244250e3f68c10520b25c7b6d6da2b`, API_OPTIONS);
    const json = await data.json();
    const dataTrailers = json.results.filter((video) => video.name ==="Official Trailer");
    const trailer = dataTrailers.length ? dataTrailers[0] : json.results[0] ;
    dispatch(addTrailer(trailer));
  }
  useEffect(()=> {
    getMovieVideos();
  }, [])
}
export default useMovieTrailer;