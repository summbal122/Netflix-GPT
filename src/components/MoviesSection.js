import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesSection = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div
     className="text-white flex flex-col gap-4 lg:gap-8 bg-[#141414] px-3 md:px-6 ">
      
      <div className="mt-[-30px] lg:mt-[-90px]  relative z-20 text-white "> 
         <MovieList title={"Trending these days"} movies= {movies.trending} />
      </div>
      <div id="movies-section">
      <h1 className='text-sm md:text-xl lg:text-2xl 2xl:text-5xl font-bold mb-2 lg:mb-6 2xl:mb-12 text-button-red'>Movies</h1>
      <MovieList title={"Now playing"} movies= {movies.nowPlayingMovies} />
      <MovieList title={"Up Coming"} movies= {movies.upComingMovies} />
      <MovieList title={"Popular"} movies= {movies.popularMovies} />
      <MovieList title={"Top Rated"} movies= {movies.topRatedMovies} />
      <MovieList title={"Trending"} movies= {movies.trendingMovies} />
     </div>
    </div>
  )
}

export default MoviesSection
