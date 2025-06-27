import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-black text-white flex flex-col items-center pt-28 px-4">
      <GptSearchBar />
      <div className="w-full max-w-6xl mt-8">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
