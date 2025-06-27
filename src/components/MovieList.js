import MovieCard from './MovieCard';
import { useState } from 'react';
const MovieList = ({ title, movies }) => {
  const [selectedId, setSelectedId] = useState(null);
  if (!movies || movies.length === 0) return null;

  const handleOverviewClick = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id)); // toggle
  };
  return (
    <div className='px-10 pb-8'>
      <h1 className='text-xl text-white font-bold mb-4'>{title}</h1>
      <div className=' overflow-x-auto scrollbar-hidden'>
        <div className='flex gap-2 w-max'>
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
