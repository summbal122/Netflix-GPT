
const VideoTitle = ({ title, overview, onPlay, showTrailer }) => {
  
  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-md space-y-4 ml-20">
        <h1 className='text-5xl font-bold mb-8'>{title}</h1>
        <p className='text-md'>{overview}</p>
        <div className='space-x-4 flex'>
          <button
            onClick={onPlay}
            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-md text-lg font-semibold hover:cursor-pointer transition duration-200 hover:bg-gray-200"
          >
            {showTrailer ? ( <>
            <i className="fa-solid fa-pause text-xl"></i>
            <span>Pause</span>
             </>
            ) : (
              <>
                <i className="fa-solid fa-play text-xl"></i>
                <span>Play</span>
              </>
            )}
           </button>
          <button className='text-white font-thick px-12 py-3 bg-[#6D6D6E] rounded-md text-lg flex items-center gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-circle-info text-xl"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
