import { API_OPTIONS } from "../utils/Constants";

const useTmdbSearch = () => {
  const searchMovieTmbd = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  return searchMovieTmbd;
};

export default useTmdbSearch;
