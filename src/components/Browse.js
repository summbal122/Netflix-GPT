import useGetPlayingMovies from "../hooks/useGetPlayingMovies";
import MainBrowser from "./MainBrowser";

const Browse = () => {
  useGetPlayingMovies();

  return (
    <div className="px-32 py-1 flex items-center justify-between">
    <MainBrowser/>
    </div>
  );
}

export default Browse;
