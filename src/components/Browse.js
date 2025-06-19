import useGetPlayingMovies from "../hooks/useGetPlayingMovies";
import MainBrowser from "./MainBrowser";

const Browse = () => {
  useGetPlayingMovies();

  return (
    <div className="">
    <MainBrowser/>
    </div>
  );
}

export default Browse;
