import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTvAiringToday } from "../utils/tvShowsSlice";

const useTvAiringToday= () => {
    const dispatch = useDispatch();
    const getTvAiringToday= async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addTvAiringToday(json.results));
  }
   
    useEffect(()=>{
    getTvAiringToday();

  }, []);
};

export default useTvAiringToday;