import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Constant/Constant"
import { setPosterVideo, setPosterimg } from "../redux/MovieSlice"

const useRandomMovieVideo = async (id) => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
        const teaser=res.data.results.filter((item)=>{return item.type==='Trailer'})
        dispatch(setPosterVideo(teaser.length > 0 ? teaser[0].key : res.data.results[0].key))
    } catch (error) {
        console.log(error)
    }
}


export default useRandomMovieVideo;