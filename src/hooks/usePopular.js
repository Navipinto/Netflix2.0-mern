import axios from "axios"
import {  setPopularMovies } from "../redux/MovieSlice"
import { PopularMovies, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const usePopular = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(PopularMovies, options)
        dispatch(setPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default usePopular;