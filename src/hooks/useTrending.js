import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrending } from "../utils/moviesSlice";

const useTrending= () => {
    const dispatch = useDispatch();
    const getTrending= async () => {
    const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addTrending(json.results));
  }
    useEffect(()=>{
    getTrending();

  }, []);
};

export default useTrending;