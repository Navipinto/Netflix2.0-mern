import axios from "axios"
import {setTopRated } from "../redux/MovieSlice"
import {  TopRatedMovies, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const useToprated = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(TopRatedMovies, options)
        dispatch(setTopRated(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useToprated;