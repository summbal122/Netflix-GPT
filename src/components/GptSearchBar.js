import { useRef, useState } from "react";
import openai from "../utils/openai";
import useTmdbSearch from "../hooks/useSearcMovieTmdb";
import { useDispatch } from "react-redux";
import { addGPTMoviesResult } from "../utils/GptSlice";
import { clearGptSearchMovies } from "../utils/GptSlice";
const GptSearchBar = () => {
  const searchMovieTmbd = useTmdbSearch();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const searchText = useRef();
   const handleClearMovies = () => {
    dispatch(clearGptSearchMovies());
   }

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();
    if (query === "") {
      setErrorMessage("Please enter a movie topic or name.");
      return;
    }
    setErrorMessage("");

    const gptQuery = `You are a movie recommendation system. Based on the query: "${query}", recommend a list of relevant movie titles.
      - If even one word is given, suggest movies.
      - Return only movie titles, no explanations.
      - Include the given title if it’s a movie.
      - Format the response as a comma-separated list.`;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const content = gptResults.choices[0]?.message?.content;
      if (!content) {
        setErrorMessage("No movies found.");
        return;
      }

      const gptMovies = content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTmbd(movie.trim()));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGPTMoviesResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (err) {
      console.error("GPT error:", err);
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-white gap-2  ">
      <h1 className="space-x-3 text-3xl lg:text-3xl 2xl:text-6xl font-bold mb-3 lg:mb-6 text-center mt-20 2xl:mt-36">
        <i className="fa-solid fa-film "></i>  <span>Find Movies with AI </span>
      </h1>

      <form
        className="flex flex-col md:flex-row items-center w-8/12 2xl:w-6/12  gap-4 lg:gap-2 2xl:gap-6" >
        <input
          ref={searchText}  type="text"
         className="flex-1 text-lg 2xl:text-3xl text-white bg-zinc-800 border border-zinc-700 p-4 2xl:p-8 rounded-md 2xl:rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          placeholder="Search by mood, genre, or movie name..." />
       <button
        onClick={(e) => {
          e.preventDefault(); 
          handleGptSearchClick();
        }}
        type="submit"
          className="bg-button-red px-4 py-4 lg:px-6 lg:py-4 2xl:p-8 text-lg 2xl:text-3xl rounded-md 2xl:rounded-xl font-semibold hover:bg-red-700 transition hover:scale-105" >   
          Search
        </button>
      </form>
          <h1 
      onClick={() => { handleClearMovies();
      }}
      className="flex mt-2 mx-auto text-button-red text-md 2xl:text-2xl hover:cursor-pointer hover:underline">Clear Result</h1>
      {errorMessage && (
    <p className="text-red-400 mt-4 text-center text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
