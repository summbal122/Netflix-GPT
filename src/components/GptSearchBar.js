import { useRef } from 'react'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addGPTMoviesResult } from '../utils/GptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  //search movies in tmbd
   const searchMovieTmbd = async(movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
       API_OPTIONS);
       const json = await data.json();
      return json.results;
    }


  const handleGptSearchClick = async () => {
  console.log(searchText.current.value)
  const gptQuery =
  "Act as a Movie recommendation system and suggest some movies for the query: " +
  searchText.current.value +
  ". Only give me names of 5 movies, comma separated. Example: Destination, Scream, Orphan, The Conference, Mission Impossible 3";

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
    if(!gptResults.choices){
    // TODO: Write Error Handling
  } 
  console.log(gptResults.choices?.[0]?.message?.content);

  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");  //split gives array of movies, comma separated strings. for each fetch movie
  const promiseArray = gptMovies.map((movie) => searchMovieTmbd(movie.trim()));
  //[aray of promises i will get, 5 promises]

  const tmdbResults = await Promise.all(promiseArray);
  console.log(gptResults.choices);
 

  dispatch(addGPTMoviesResult({
    movieNames: gptMovies,
    movieResults:tmdbResults
  }
  ));

  } ;

  return (
    <div className="pt-30 flex justify-center">
      <div className='space-x-3'>
        <form onSubmit={(e) =>  e.preventDefault()}>
        <input
        ref={searchText}
         type='text' className='min-w-md text-white  p-3 cursor-pointer rounded-sm border border-gray-400 focus:outline-amber-50 placeholder:text-black ' placeholder='what do you want to watch?'/>
        <button 
         onClick={handleGptSearchClick}
         className="bg-button-red  text-white px-5 py-3 cursor-pointer rounded-sm">Search</button>
     </form>
      </div>

    </div>
  )
}

export default GptSearchBar
