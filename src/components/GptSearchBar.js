import { useRef } from 'react'
import openai from "../utils/openai";
const GptSearchBar = () => {
  const searchText = useRef();

  const handleGptSearchClick = async () => {
  console.log(searchText.current.value)
   
  const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma separated like the exmample result given ahead. Example result: Destination, Scream, Orphan, The Conference, Mission impossible 3" ;
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  if(!gptResults.choices){
    // TODO: Write Error Handling
  } 
  console.log(gptResults.choices?.[0]?.message?.content);

  // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",") //split gives array of movies
  
  console.log(gptResults.choices);
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
