import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const TvShowsSection = () => {
  const tv = useSelector(store => store.tv);
  return (
    <div id="tv-shows">

         <div
    id="movies-section"
     className="text-white flex flex-col gap-8 bg-black px-6 py-8">
       <h1 className='text-2xl font-bold text-button-red'>Tv Shows</h1>
       <MovieList title={"Airing Today"} movies = {tv.tvAiringToday} />
       <MovieList title={"On The Air"} movies = {tv.tvOnTheAir} />
       <MovieList title={"Popular Tv"} movies = {tv.popularTv} />
       <MovieList title={"Top Rated"} movies = {tv.topRatedTv} />
      
    </div>
    </div>
  )
}

export default TvShowsSection;
