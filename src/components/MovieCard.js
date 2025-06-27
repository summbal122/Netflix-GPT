import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath, vote, releaseDate, overview, isSelected, onClick }) => {
  if (!posterPath) return null;

  return (
    <div onClick={onClick} className="cursor-pointer relative ">
      <img
        className="w-14 h-18 md:w-36 md:h-48 2xl:w-sm 2xl:h-10/12 rounded transform transition duration-300 ease-in-out hover:scale-115 hover:shadow-xl hover:shadow-red-800/20 border border-[#141414]"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
      {vote> 0 ? (
       <h1 className="text-yellow-500 mt-1 text-[6px] 2xl:text-lg font-semibold flex items-center gap-1">
        <i className="fa-solid text-[6px] 2xl:text-lg fa-star text-yellow-400" />
        {vote.toFixed(1)}
      </h1>
      ) : <h2 className="text-yellow-500  mt-1 text-[6px] 2xl:text-lg">Not rated </h2>}
 
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
           {overview ? (<p>{overview}</p>) : "Overview not avaiable"} 
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
