import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

    useEffect(()=>{
    getPopularMovies ();

  }, []);
};

export default usePopularMovies;