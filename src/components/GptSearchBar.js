import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGPTMoviesResult } from "../utils/GptSlice";
const GptSearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const searchText = useRef();

  const searchMovieTmbd = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

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
    <div className="w-full max-w-3xl flex flex-col items-center text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        🎬 Find Movies with AI
      </h1>

      <form
        className="flex flex-col md:flex-row items-center w-full gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }} >
        <input
          ref={searchText}
          type="text"
          className="flex-1 text-white bg-zinc-800 border border-zinc-700 p-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          placeholder="Search by mood, genre, or movie name..."
        />
        <button
          type="submit"
          className="bg-button-red px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition hover:scale-105"
        >   Search
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-400 mt-4 text-center text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
