import useGetPlayingMovies from "../hooks/useGetPlayingMovies";
import MainBrowser from "./MainBrowser";
import MoviesSection from "./MoviesSection";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import TvShowsSection from "./TvShowsSection";
import useTvAiringToday from "../hooks/useTvShows";
import useTvOnTheAir from "../hooks/useTvOnTheAir";
import usePopularTv from "../hooks/usePopularTv";
import useTopRatedTv from "../hooks/useTopRatedTv";
import useGenres from "../hooks/useGenres";
const Browse = () => {
  const showGptSearch = useSelector((store => store.gpt.showGptSearch))
  useGetPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTvAiringToday();
  useTvOnTheAir();
  usePopularTv();
  useTopRatedTv();
  useGenres();
  

  return (
    <div>
      {showGptSearch ? <GptSearch /> : <> <MainBrowser/>
      <MoviesSection/>
      <TvShowsSection/>
    </>  }
   


    </div>
  );
}

export default Browse;
