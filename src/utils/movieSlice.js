import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        topMovies:null,
        casualMovies:null,
        awardMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        addTopMovies:(state,action)=>{
            state.topMovies=action.payload
        },
        addCasualMovies:(state,action)=>{
            state.casualMovies=action.payload
        },
        addAwardMovies:(state,action)=>{
            state.awardMovies=action.payload
        },
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addTopMovies,addCasualMovies,addAwardMovies}=movieSlice.actions
export default movieSlice.reducer