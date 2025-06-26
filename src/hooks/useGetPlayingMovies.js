import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useGetPlayingMovies = () => {
    const nowPlayiingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();
    const getPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
    useEffect(()=>{
      !nowPlayiingMovies && getPlayingMovies (); //memoization
  }, []);
};

export default useGetPlayingMovies;