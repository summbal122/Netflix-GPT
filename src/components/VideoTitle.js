
const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <div className=" absolute left-0 top-1/2 transform -translate-y-1/2 w-md space-y-4 ml-20">
       <h1 className='text-5xl font-bold mb-8 '>{title}</h1>
      <p className='text-sm'>{overview}</p>

      <div className='space-x-4 flex'> 
       <button className='text-white font-bold px-5 py-3 bg-gray-600 rounded-md text-xs flex items-center gap-2'><i className="fa-solid fa-play "></i>Play</button>
      <button className='text-white font-bold px-5 py-3 bg-gray-600 rounded-md text-xs'>+ My List</button>
      </div>
       </div>
     
      
    </div>
    
  )
}

export default VideoTitle
