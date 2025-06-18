import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({id}) => {

const trailerVideo = useSelector((store) => store.movies.trailerVideo)
 useMovieTrailer(id);

  return (
    <div>
      
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
