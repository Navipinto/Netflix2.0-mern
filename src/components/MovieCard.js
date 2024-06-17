import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFindByName from '../hooks/useFetchByName'
import { setFindByName } from '../redux/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'

function MovieCard(props) {
  const title=props.title
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // const HandleMovieClick=()=>{
  //   dispatch(setFindByName(title))
  //   navigate("/moviedetails")
  //   }

  return (
    <div className='w-36 rounded-md'>
      <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" onClick={() => {
       dispatch(setFindByName(title))
        navigate("/moviedetails");
} }/>
        </div>
  )
}

export default MovieCard