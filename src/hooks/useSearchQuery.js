import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Constant/Constant"
import { useAuth } from "../Context/AuthContext"
import { setSearchResults } from "../redux/MovieSlice"
import { useEffect } from "react"

const useSearchQuery = async () => {
    const{search}=useAuth()
    const dispatch = useDispatch()
    useEffect(() => {
      
    const Search= async()=>{
        try {
            if(search!=null)
                {
            const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`, options)
            dispatch(setSearchResults(res.data.results))
                }
        } catch (error) {
            console.log(error)
        }
    }
    Search()
      
    }, [])
    
}


export default useSearchQuery;