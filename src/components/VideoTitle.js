
const VideoTitle = ({ title, overview, onPlay, showTrailer }) => {
  
  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r h-60 md:h-screen from-black'>
      <div className="absolute top-32 lg:top-3/12 w-[150px]  md:w-xs lg:w-sm 2xl:w-3xl space-y-2 lg:space-y-4 2xl:space-y-10 ml-15 md:ml-20">
        <h1 className='text-sm md:text-3xl lg:text-5xl 2xl:text-8xl font-bold lg:mb-8'>{title}</h1>
        <p className=' text-[5px] md:text-xs lg:text-md 2xl:text-2xl'>{overview}</p>
        <div className='space-x-1 lg:space-x-2 2xl:space-x-4 flex'>
          <button
            onClick={onPlay}
            className="flex items-center gap-1 md:gap-3 px-3 md:px-6 py-1 md:py-3 2xl:px-18 2xl:py-6 bg-white text-black rounded-xs md:rounded-md text-[6px] md:text-xs lg:text-lg 2xl:text-3xl font-semibold hover:cursor-pointer transition duration-200 hover:bg-gray-200"
          >
            {showTrailer ? ( <>
            <i className="fa-solid fa-pause text-[8px] md:text-xl  2xl:text-3xl"></i>
            <span>Pause</span>
             </>
            ) : (
              <>
                <i className="fa-solid fa-play text-[10px] md:text-xl  2xl:text-3xl"></i>
                <span>Play</span>
              </>
            )}
           </button>
          <button className='text-white font-thick px-3 md:px-12 py-1 md:py-3 2xl:px-18 2xl:py-6 bg-[#6D6D6E] rounded-xs md:rounded-md text-[6px] md:text-xs lg:text-lg  2xl:text-3xl  flex items-center gap-1 md:gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-circle-info text-[8px] md:text-xl  2xl:text-3xl "></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
