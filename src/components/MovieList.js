import MovieCard from './MovieCard';
import { useState } from 'react';
const MovieList = ({ title, movies }) => {
  const [selectedId, setSelectedId] = useState(null);
  if (!movies || movies.length === 0) return null;

  const handleOverviewClick = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id)); // toggle
  };
  return (
    <div className='px-7 lg:px-10 pb-4 lg:pb-6'>
      <h1 className='text-lg md:text-md lg:text-lg 2xl:text-5xl text-white font-bold mb-6 lg:mb-4 2xl:mb-10 '>{title}</h1>
      <div className='overflow-x-auto scrollbar-hidden'>
        <div className='flex gap-2 lg:gap-3 w-max'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} vote={movie.vote_average} releaseDate={movie.release_date} overview = {movie.overview} 
            isSelected={selectedId === movie.id}
              onClick={() => handleOverviewClick(movie.id)}
           />
          ))}
          
        </div>
      </div>
      
    </div>
  );
};

export default MovieList;
