import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainBrowser = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(movies === null) return;
  
  const mainMovie = movies[0];
  const{
    original_title,
    overview,
    id,
    } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview}  />
      <VideoBackground id={id}/>
      
    </div>
  )
}

export default MainBrowser
