import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id, showTrailer }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(id);

  return (
    <div className="aspect-video w-screen bg-black">
      {showTrailer && trailerVideo?.key ? (
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playsinline=1&rel=0&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="w-screen object-cover h-full"
          alt="bg"
          src="https://4kwallpapers.com/images/walls/thumbs_3t/22358.jpg"
        />
      )}
    </div>
  );
};

export default VideoBackground;
