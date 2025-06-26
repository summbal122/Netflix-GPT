import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath, vote, releaseDate, overview, isSelected, onClick }) => {
  if (!posterPath) return null;

  return (
    <div onClick={onClick} className="cursor-pointer relative ">
      <img
        className="w-36 rounded transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-800/20"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
      {vote> 0 ? (
       <h1 className="text-yellow-500 mt-1 text-sm font-semibold flex items-center gap-1">
        <i className="fa-solid fa-star text-yellow-400" />
        {vote.toFixed(1)}
      </h1>
      ) : <h2 className="text-yellow-800  mt-1 text-xs">Not rated </h2>}

      {isSelected && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-[#6D6D6E]/50 text-white p-6 rounded-lg max-w-xl w-full text-sm relative">
            <button
              className="absolute top-2 right-3 text-white text-xl"
              onClick={(e) => {
                e.stopPropagation(); // prevent reopening modal
                onClick(); // closes modal
              }}
            >
              &times;
            </button>
            <h2 className="text-white text-lg font-bold mb-5">Release Date:{" "}<span className='text-sm font-thin'>{releaseDate}</span></h2>
            <h3 className="text-amber-300 mb-2 text-lg font-semibold">Overview</h3>
           {overview ? (<p>{overview}</p>) : "Overview not a"} 
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
