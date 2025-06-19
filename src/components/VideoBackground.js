import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({id}) => {

const trailerVideo = useSelector((store) => store.movies.trailerVideo)
 useMovieTrailer(id);

  return (
   <div className="w-full h-screen aspect-video"> 
      
      <iframe
      className="w-screen  h-screen"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1" } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
    </div>
  )
}

export default VideoBackground
