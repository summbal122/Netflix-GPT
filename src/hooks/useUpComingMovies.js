import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }

    useEffect(()=>{
    getUpComingMovies ();

  }, []);
};

export default useUpComingMovies;