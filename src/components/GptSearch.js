import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
const GptSearch = () => {
  return (
    <div className='bg-[#141414] text-white min-h-screen'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
