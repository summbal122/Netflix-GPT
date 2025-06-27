import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTvOnTheAir } from "../utils/tvShowsSlice";

const useTvOnTheAir= () => {
    const dispatch = useDispatch();
    const getTvOnTheAir= async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    dispatch(addTvOnTheAir(json.results));
  }
   
    useEffect(()=>{
    getTvOnTheAir();

  }, []);
};

export default useTvOnTheAir;