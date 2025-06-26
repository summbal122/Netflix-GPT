import { useRef, useState } from 'react'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addGPTMoviesResult } from '../utils/GptSlice';

const GptSearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const searchText = useRef();

  // Search movies in TMDB
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
      setErrorMessage("Find movies to display");
      return;
    }

    setErrorMessage(""); // clear previous errors

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of movies, if the user enters the name of the movie, then give the movie in the result and the same with that names and comma separated. Example: Destination, Scream, Orphan, The Conference, Mission Impossible 3";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if (!gptResults.choices || !gptResults.choices[0]?.message?.content) {
        setErrorMessage("No movies available");
        return;
      }

      const gptMovies = gptResults.choices[0].message.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTmbd(movie.trim()));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGPTMoviesResult({
        movieNames: gptMovies,
        movieResults: tmdbResults
      }));
    } catch (err) {
      console.error("Error fetching GPT results", err);
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="pt-30 flex flex-col items-center">
      <div className="space-x-3">
        <form
          className="space-x-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleGptSearchClick();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className="min-w-md text-white p-3 cursor-pointer rounded-sm border border-gray-400 focus:outline-amber-50 placeholder-white"
            placeholder="What do you want to watch?"
          />
          <button
            type="submit"
            className="bg-button-red text-white px-5 py-3 cursor-pointer rounded-sm"
          >
            Search
          </button>
        </form>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
