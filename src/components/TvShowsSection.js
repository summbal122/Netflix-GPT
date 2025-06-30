import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const TvShowsSection = () => {
  const tv = useSelector(store => store.tv);
  return (
    <div id="tv-shows">
    <div
    id="movies-section"
     className="text-white flex flex-col gap-8 bg-[#141414] px-6 py-8">
       <h1 className='text-lg md:text-xl lg:text-2xl 2xl:text-5xl 2xl:mb-10 font-bold text-button-red'>Tv Shows</h1>
       <MovieList title={"Airing Today"} movies = {tv.tvAiringToday} />
       <MovieList title={"On The Air"} movies = {tv.tvOnTheAir} />
       <MovieList title={"Popular Tv"} movies = {tv.popularTv} />
       <MovieList title={"Top Rated"} movies = {tv.topRatedTv} />
      
    </div>
    </div>
  )
}

export default TvShowsSection;
