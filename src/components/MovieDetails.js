import React from 'react'
import { useSelector } from 'react-redux'
import useFindByName from '../hooks/useFetchByName'
import { Link } from 'react-router-dom'

function MovieDetails() {
  const name = useSelector((store) => store?.movie?.FindByName)
  useFindByName(name)
  const movieDetails = useSelector((store) => store?.movie?.FindByNameResults)
  if(!movieDetails)return;
  return (
    <div className='bg-black'>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="" className='w-full h-screen absolute'/>
          <div className='w-full h-screen flex flex-col-reverse  md:flex-row items-center justify-center z-10 absolute px-10'>
        <Link className='bg-black text-white font-semibold px-5 py-2 rounded-md absolute z-10 left-0 top-0 mx-4 my-3' to="/home">Back</Link>
          <div className='text-white flex flex-col lg:text-justify items-center md:items-start px-4 space-y-3'>
            <h2 className='text-5xl font-bold'>{movieDetails.title}</h2>
            <p className='w-full md:w-9/12 xl:w-[800px]'>{movieDetails.overview}</p>
            <div className='flex flex-row py-5 gap-4'>
              <button className='bg-gray-700 px-3 py-2 rounded-md bg-opacity-55'>Watch now</button>
            <button className='bg-gray-700 px-3 py-2 rounded-md bg-opacity-55'>Add to Mylist</button>
            </div>
          </div>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt=""  className='w-80 rounded-xl'/>
        </div>
    </div>
  )
}

export default MovieDetails