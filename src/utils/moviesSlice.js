import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
     name: "movies",
     initialState: {
      nowPlayingMovies: null,
      trailerVideo:null,
      popularMovies:null,
      upComingMovies:null,
      topRatedMovies:null,
      trendingMovies:null,
     },
      reducers: {
        addNowPlayingMovies : (state,action) => {
          state.nowPlayingMovies = action.payload;
        
        },
        addTrailer : (state, action) => {
        state.trailerVideo = action.payload
        },  
        addPopularMovies : (state,action) => {
          state.popularMovies = action.payload;
        
        }, 
        addUpComingMovies : (state,action) => {
          state.upComingMovies = action.payload;
        
        },
        addTopRatedMovies : (state,action) => {
          state.topRatedMovies = action.payload;
        },
         addTendingMovies : (state,action) => {
          state.trendingMovies = action.payload;
        }
        
      }

}
);
export const {addNowPlayingMovies, addTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies, addTendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
