import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id, showTrailer }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const verticalTrailer = useSelector((store) => store.movies.verticalTrailer); 

  useMovieTrailer(id);

  return (
    <div className="aspect-video w-screen bg-[#141414]">
      {showTrailer && trailerVideo?.key ? (
        <>
        <iframe
          className="w-screen h-screen hidden lg:block"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playsinline=1&rel=0&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-screen xs:h-48 h-60 md:h-12/12 block lg:hidden"
          src={`https://www.youtube.com/embed/${verticalTrailer.key}?autoplay=1&mute=1&playsinline=1&rel=0&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </>
        
      ) : (
        <img
          className="w-screen h-60 lg:h-screen"
          alt="bg"
          src="https://4kwallpapers.com/images/walls/thumbs_3t/22358.jpg"
        />
      )}
    </div>
  );
};

export default VideoBackground;
