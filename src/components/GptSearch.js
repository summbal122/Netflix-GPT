import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
const GptSearch = () => {
  return (
    <div className='bg-black text-white'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
