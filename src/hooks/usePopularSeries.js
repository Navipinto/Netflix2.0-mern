import axios from "axios"
import { setPopularSeries, setTopRated, setTopRatedSeries } from "../redux/MovieSlice"
import { PopularSeries, TopRatedMovies, TopRatedSeries, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const usePopularSeries = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(PopularSeries, options)
        dispatch(setPopularSeries(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default usePopularSeries;