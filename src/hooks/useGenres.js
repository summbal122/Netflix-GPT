import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGenres } from "../utils/moviesSlice";

const useGenres= () => {
    const dispatch = useDispatch();
    const getGenres= async () => {
    const data = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addGenres(json.genres));

  }
    useEffect(()=>{
    getGenres();

  }, []);
};

export default useGenres;