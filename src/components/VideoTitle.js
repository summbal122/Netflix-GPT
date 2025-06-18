
const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-md border-7 space-y-2 p-5'>
      <h1 className='text-3xl font-bold '>{title}</h1>
      <p className='text-xs'>{overview}</p>

      <div className='space-x-4 flex'> 
       <button className='text-white font-bold px-4 py-2 bg-gray-400 rounded-md text-xs flex items-center gap-2'><i className="fa-solid fa-play "></i>Play</button>
      <button className='text-white font-bold px-4 py-2 bg-gray-400 rounded-md text-xs'>+ My List</button>
      </div>
      
    </div>
    
  )
}

export default VideoTitle
