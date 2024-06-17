import React, { useEffect, useState } from 'react'
import netflixmernlogo from '../assets/netflixmernlogo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useAuth } from '../Context/AuthContext';
import useSearchQuery from '../hooks/useSearchQuery';


function Header() {
    const user=useSelector((store)=>store.user?.user)
    
    const [showinput, setshowinput] = useState(false)
    const {setisAuthenticated,search,setsearch,setisHome,setisMovie,setisSeries}=useAuth();
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(setUser(null))
        setisAuthenticated(false)
        navigate("/login")
    }
    
    const HandleSubmit=()=>{
        navigate("/search")
    }
  return (
    <div>
        <div className='w-full h-14 bg-transparent flex flex-row items-center justify-between fixed z-10'>
            <div className='flex flex-row items-center'>

            <img src={netflixmernlogo} alt="" className='h-16 px-3'/>
            <ul className='flex flex-row gap-4 text-white font-semibold text-md'>
                      <li onClick={() => { setsearch(""); setisHome(true); setisMovie(false); setisSeries(false) }}>
                          <Link to="/home">Home</Link>
                      </li>
                      <li onClick={()=>{setisHome(false);setisMovie(false);setisSeries(true)}}>
                          <Link to="/series">Series</Link>
                      </li>
                      <li onClick={() => { setisHome(false); setisMovie(true); setisSeries(false) }}>
                          <Link to="/movies">Movies</Link>
                      </li>
                      <li>
                          <Link to="/mylist">MyList</Link>
                      </li>
            </ul>
            </div>
              <div className='flex flex-row items-center gap-5 px-4'>
                  {showinput && (
                    <form className='flex flex-row gap-2'>
                    <input type="text" placeholder='Enter movie or series name' className='w-56 py-1 rounded-md border-none px-2' value={search} onChange={(e)=>setsearch(e.target.value)}/>
                          <button className='bg-red-600 text-white font-semibold px-3 py-2' onClick={HandleSubmit}>Search</button>
                      </form>)}
                  {search.length<=0&&<IoSearchOutline onClick={()=>{setshowinput(!showinput);setsearch("")}} className='text-white'/>}
                  <div className='flex flex-row gap-2 items-center'>
                      <FaUserCircle className='text-white'/>
                      <p className='text-white'>{user?user.username:""}</p>
                  </div>
                  <button className='px-3 py-1 rounded-md bg-red-600 text-white font-semibold' onClick={handleLogout}>Logout</button>

              </div>

        </div>
    </div>
  )
}

export default Header