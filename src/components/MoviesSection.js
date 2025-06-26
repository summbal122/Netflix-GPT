import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesSection = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div
    id="movies-section"
     className="text-white flex flex-col gap-8 bg-black px-6 py-8">
      <div className="mt-[-190px]  relative z-20 text-white "> 
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
