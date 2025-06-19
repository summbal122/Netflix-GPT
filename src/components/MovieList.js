import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className='px-6 pb-8 '>
      <h1 className='text-xl font-bold mb-4'>{title}</h1>

      {/* Horizontal scroll container */}
      <div className='overflow-x-auto'>
        <div className='flex gap-2 w-max'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
