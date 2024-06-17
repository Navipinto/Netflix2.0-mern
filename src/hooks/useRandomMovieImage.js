import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Constant/Constant"
import { setPosterimg } from "../redux/MovieSlice"

const useRandomMovieImage = async (id) => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
        dispatch(setPosterimg(res.data.posters[0].file_path))
    } catch (error) {
        console.log(error)
    }
}


export default useRandomMovieImage;