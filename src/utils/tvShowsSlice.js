import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvAiringToday :null,
    tvOnTheAir:null,
    popularTv:null,
    topRatedTv:null,
  }, 
  reducers: {
    addTvAiringToday: (state,action) => {
      state.tvAiringToday = action.payload;
    },
    addTvOnTheAir: (state,action) => {
      state.tvOnTheAir = action.payload;
    },
    addPopularTv: (state,action) => {
      state.popularTv = action.payload;
    },
     addTopRatedTv: (state,action) => {
      state.topRatedTv = action.payload;
    }
    


  }

})
export const {addTvAiringToday, addTvOnTheAir, addPopularTv, addTopRatedTv} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;