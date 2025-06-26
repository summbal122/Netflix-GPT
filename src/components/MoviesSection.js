import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesSection = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="text-white bg-black">
      <div className="mt-[-260px] relative z-20"> 
         <MovieList title={"Now playing"} movies= {movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Up Coming"} movies= {movies.upComingMovies} />
      <MovieList title={"Popular"} movies= {movies.popularMovies} />
      <MovieList title={"Top Rated"} movies= {movies.topRatedMovies} />
      <MovieList title={"Trending"} movies= {movies.trendingMovies} />

      
    </div>
  )
}

export default MoviesSection
