import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addTendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    const result = json.results;
    dispatch(addTendingMovies(result));
    console.log(result);
  }
  useEffect(() => {
   getTrendingMovies();
  },[])

}
export default useTrendingMovies;