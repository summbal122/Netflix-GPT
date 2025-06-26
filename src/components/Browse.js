import useGetPlayingMovies from "../hooks/useGetPlayingMovies";
import MainBrowser from "./MainBrowser";
import MoviesSection from "./MoviesSection";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
const Browse = () => {
  const showGptSearch = useSelector((store => store.gpt.showGptSearch))
  useGetPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  useTrendingMovies();

  return (
    <div className="">
      {
      showGptSearch ? <GptSearch /> : <> <MainBrowser/>
    <MoviesSection/>
    </>  }
   


    </div>
  );
}

export default Browse;
