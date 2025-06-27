import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { addPopularTv } from "../utils/tvShowsSlice";
const usePopularTv = () => {
  const dispatch = useDispatch();
  const getPopularTv = async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=b7244250e3f68c10520b25c7b6d6da2b", API_OPTIONS);
    const json = await data.json();
    const result = json.results;
    dispatch(addPopularTv(result));
  }
  useEffect(() => {
   getPopularTv();
  },[])

}
export default usePopularTv;