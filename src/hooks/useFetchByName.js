import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Constant/Constant"
import { setFindByName, setFindByNameResults, setPosterimg } from "../redux/MovieSlice"
import { useEffect } from "react"

const useFindByName = (name) => {
    const dispatch = useDispatch()
    useEffect(() => {
     const FindMovieByName=async()=>{
         try {
             if(name!=null)
                 {
             const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options)
             dispatch(setFindByNameResults(res.data.results[0]))
             dispatch(setFindByName(null))
                 }
         } catch (error) {
             console.log(error)
         }
        }

     FindMovieByName();
    }, [name])
    
}


export default useFindByName;