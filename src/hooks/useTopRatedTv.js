import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addTopRatedTv } from "../utils/tvShowsSlice";
const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const getTopRatedTv = async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    const result = json.results;
    dispatch(addTopRatedTv(result));
  }
  useEffect(() => {
   getTopRatedTv();
  },[])

}
export default useTopRatedTv;