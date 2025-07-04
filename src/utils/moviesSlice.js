import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
     name: "movies",
     initialState: {
      nowPlayingMovies: null,
      trailerVideo:null,
      verticalTrailer:null,
      popularMovies:null,
      upComingMovies:null,
      topRatedMovies:null,
      trendingMovies:null,
      genres:null,
      trending:null,
     },
      reducers: {
        addNowPlayingMovies : (state,action) => {
          state.nowPlayingMovies = action.payload;
        
        },
          addTrailer: (state, action) => {
        state.trailerVideo = action.payload.trailer;
        state.verticalTrailer = action.payload.verticalTrailer;
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
        ,
         addGenres : (state,action) => {
          state.genres = action.payload;
        },
         addTrending : (state,action) => {
          state.trending = action.payload;
        }
        
      }

}
);
export const {addNowPlayingMovies, addTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies, addTendingMovies, addGenres, addTrending} = moviesSlice.actions;
export default moviesSlice.reducer;
