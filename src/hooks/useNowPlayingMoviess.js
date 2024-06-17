import axios from "axios"
import {  setNowPlayingMovie } from "../redux/MovieSlice"
import { NowPlayingMovieConst, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const useNowPlayingMovies= ()=>{
    const dispatch=useDispatch()
    useEffect(() => {
        const Nowplaying=async()=>{
        try {
            const res = await axios.get(NowPlayingMovieConst, options)
            dispatch(setNowPlayingMovie(res.data.results))
        } catch (error) {
            console.log(error)
        }
    }
        Nowplaying()
      
    }, [])
    
}


export default useNowPlayingMovies;