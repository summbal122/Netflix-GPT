import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useGetPlayingMovies = () => {
    const dispatch = useDispatch();
    const getPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }

    useEffect(()=>{
    getPlayingMovies ();

  }, []);
};

export default useGetPlayingMovies;