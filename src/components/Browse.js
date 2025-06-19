import useGetPlayingMovies from "../hooks/useGetPlayingMovies";
import MainBrowser from "./MainBrowser";
import MoviesSection from "./MoviesSection";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useGetPlayingMovies();
  usePopularMovies();
  useUpComingMovies();

  return (
    <div className="">
    <MainBrowser/>
    <MoviesSection/>
    </div>
  );
}

export default Browse;
