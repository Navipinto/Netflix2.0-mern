import axios from "axios"
import { setTopRated, setTopRatedSeries } from "../redux/MovieSlice"
import { TopRatedMovies, TopRatedSeries, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const useTopratedSeries = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(TopRatedSeries, options)
        dispatch(setTopRatedSeries(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useTopratedSeries;