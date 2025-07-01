import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath, vote, releaseDate, overview, isSelected, onClick }) => {
  if (!posterPath) return null;

  return (
    <div onClick={onClick} className="cursor-pointer relative ">
      <img
        className="md:w-50 md:h-68 lg:w-44 2xl:w-sm 2xl:h-10/12 rounded transform transition duration-300 ease-in-out hover:scale-115 hover:shadow-xl hover:shadow-red-800/20 border border-[#141414]"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
      {vote> 0 ? (
       <h1 className="text-yellow-500 mt-0.5 text-xs lg:text-[10px] 2xl:text-lg font-semibold flex items-center gap-1">
        <i className="fa-solid text-xs lg:text-[10px]  2xl:text-lg fa-star text-yellow-400" />
        {vote.toFixed(1)}
      </h1>
      ) : <h2 className="text-yellow-500  mt-1 text-xs lg:text-[10px]  2xl:text-lg">Not rated </h2>}
 
      {isSelected && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 text-xl">
          <div className="bg-[#6D6D6E]/50 text-white p-3 lg:p-6 2xl:p-8 rounded-lg max-w-2xl w-full text-sm relative">
            <button
              className="absolute text-2xl lg:text-lg 2xl:text-2xl top-2 right-3 text-white"
              onClick={(e) => {
                e.stopPropagation(); 
                onClick(); 
              }}
            >
              &times;
            </button>
            {releaseDate && <h2 className="text-white text-xl lg:text-lg 2xl:text-2xl mb-2 lg:mb-5">Release Date:{" "}<span className='text-lg lg:text-sm font-thin '>{releaseDate}</span></h2> }
            
            <h3 className="text-amber-300 mb-1 lg:mb-2 text-xl lg:text-xl 2xl:text-3xl font-semibold">
            Overview
            </h3>
           {overview ? (<p className='text-lg 2xl:text-2xl'>{overview}</p>) : "Overview not avaiable"} 
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
