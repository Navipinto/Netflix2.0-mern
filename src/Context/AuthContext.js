import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser ,setLoading} from "../redux/userSlice";

export const Context=createContext()

export const useAuth=()=>useContext(Context);

export default function AuthProvider({children})
{

    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [isHome, setisHome] = useState(true)
    const [isMovie, setisMovie] = useState(false)
    const [isSeries, setisSeries] = useState(false)
    const [randomnumber, setrandomnumber] = useState(0)
    const dispatch=useDispatch()
    const [search, setsearch] = useState("")

    const host="http://localhost:8800"

    const Signup = async (username,email,password)=>{
        dispatch(setLoading(true))
       const data= await fetch(`${host}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
           body: await JSON.stringify({ email: email, username: username, password: password })
        });

        const responseData=await data.json();
        if(responseData.status==true)
            {
                dispatch(setLoading(false))
                return true
            }
            else
            {
                dispatch(setLoading(false))
                return false
            }
    }

    const LoginData = async (email, password) => {
        dispatch(setLoading(true))
        const data = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: await JSON.stringify({ email: email,password: password })
        });

        const responseData = await data.json();
        if (responseData.status == true) {
            setisAuthenticated(true)
            dispatch(setUser(responseData.info))
            dispatch(setLoading(false))
            return true
        }
        else {
            dispatch(setLoading(false))
            return false
        }
    }

    return(
        <Context.Provider value={{Signup,LoginData,isAuthenticated,setisAuthenticated,search,setsearch,isHome,isSeries,isMovie,setisHome,setisMovie,setisSeries,randomnumber,setrandomnumber}}>
            {children}
        </Context.Provider>
    )
}