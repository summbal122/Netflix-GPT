
const VideoTitle = ({ title, overview, onPlay, showTrailer }) => {
  
  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-md space-y-4 ml-20">
        <h1 className='text-5xl font-bold mb-8'>{title}</h1>
        <p className='text-md'>{overview}</p>
        <div className='space-x-4 flex'>
          <button
            onClick={onPlay}
            className='font-semibold px-8 py-3 bg-white text-black rounded-md text-lg items-center gap-3 flex hover:cursor-pointer'>
            <i className="fa-solid fa-play text-black text-2xl"></i>{showTrailer ? "Pause" : "Play"}
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
