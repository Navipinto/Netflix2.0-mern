import {createSlice} from '@reduxjs/toolkit'

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        NowPlayingMovie:null,
        PopularMovies:null,
        TopRated:null,
        Upcoming:null,
        Posterimage:null,
        PosterVideo:null,
        FindByName:null,
        FindByNameResults: null,
        AiringToday:null,
        OnTheAir:null,
        PopularSeries:null,
        TopRatedSeries:null,
        searchResults:null
    },
    reducers:{
        setNowPlayingMovie:(state,action)=>{
            state.NowPlayingMovie=action.payload;
        },
        setPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        setTopRated: (state, action) => {
            state.TopRated = action.payload;
        },
        setUpcoming: (state, action) => {
            state.Upcoming = action.payload;
        },
        setPosterimg: (state, action) => {
            state.Posterimage = action.payload;
        },
        setPosterVideo: (state, action) => {
            state.PosterVideo = action.payload;
        },
        setFindByName: (state, action) => {
            state.FindByName = action.payload;
        },
        setFindByNameResults: (state, action) => {
            state.FindByNameResults = action.payload;
        },
        setAiringToday: (state, action) => {
            state.AiringToday = action.payload;
        },
        setPopularSeries: (state, action) => {
            state.PopularSeries = action.payload;
        },
        setTopRatedSeries: (state, action) => {
            state.TopRatedSeries = action.payload;
        },
        setOnTheAir: (state, action) => {
            state.OnTheAir = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
}})

export const {setSearchResults,setNowPlayingMovie,setPopularMovies,setTopRated,setUpcoming,setPosterimg,setPosterVideo,setFindByName,setFindByNameResults,setAiringToday,setOnTheAir,setPopularSeries,setTopRatedSeries}=  movieSlice.actions
export default movieSlice.reducer