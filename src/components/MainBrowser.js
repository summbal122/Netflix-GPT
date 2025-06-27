import { useSelector } from "react-redux"
import { useState } from "react";
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainBrowser = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  const [showTrailer, setShowTrailer] = useState(false);
  
  if (movies === null) return null;

  const mainMovie = movies[0];
  const {
    original_title,
    overview,
    id,
  } = mainMovie;

  return (
    <div className="bg-black">
      <VideoTitle
        title={original_title}
        overview={overview}
        onPlay={() => setShowTrailer((prev => !prev))}
        showTrailer={showTrailer}
      />
      <VideoBackground id={id} showTrailer={showTrailer} />
    </div>
  );
};

export default MainBrowser;
