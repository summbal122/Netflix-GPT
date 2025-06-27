import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
import gptReducer from "../utils/GptSlice"
import tvShowsReducer from "../utils/tvShowsSlice" 
const appStore = configureStore(
  {
    reducer: {
      user: userReducer,
      movies: moviesReducer,
      gpt:gptReducer,
      tv: tvShowsReducer,
    }
  }
)
export default appStore;
