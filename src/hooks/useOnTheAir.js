import axios from "axios"
import { setOnTheAir } from "../redux/MovieSlice"
import { OnTheAirSeries, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const useOnTheAir = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(OnTheAirSeries, options)
        dispatch(setOnTheAir(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useOnTheAir;