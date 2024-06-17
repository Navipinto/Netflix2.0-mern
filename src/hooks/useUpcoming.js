import axios from "axios"
import { setUpcoming } from "../redux/MovieSlice"
import {  UpcomingMovies, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const useUpcoming = async() => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(UpcomingMovies, options)
        dispatch(setUpcoming(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useUpcoming;