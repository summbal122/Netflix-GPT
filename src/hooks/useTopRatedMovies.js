import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    const result = json.results;
    dispatch(addTopRatedMovies(result))
  }
  useEffect(() => {
    getTopRatedMovies();
  }, [])

}
export default useTopRatedMovies;