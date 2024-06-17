import axios from "axios"
import { setAiringToday } from "../redux/MovieSlice"
import { AiringTodaySeries, options } from "../Constant/Constant"
import { useDispatch } from "react-redux"

const useAiringToday = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(AiringTodaySeries, options)
        dispatch(setAiringToday(res.data.results))
    } catch (error) {
        console.log(error)
    }
}


export default useAiringToday;