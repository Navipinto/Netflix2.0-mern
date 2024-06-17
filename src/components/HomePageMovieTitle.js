import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";

function HomePageMovieTitle(props) {
  return (
    <div>
      <div className='absolute w-full h-screen flex  flex-col justify-center gap-0 items-start'>
        <div className='gap-0 flex flex-row items-center px-10 -my-3'>
          <img src="https://i.ibb.co/fv0bh76/netflix-logo-thumb-removebg-preview.png" alt="" className='w-12' />
          <p className='text-3xl font-bold text-white'>Movies</p>
        </div>
        <div className='px-10 text-left space-y-2'>
        <h2 className='text-white font-bold text-6xl  py-2'>{props.title}</h2>
        <p className='w-2/4 text-white'>{props.description}</p>
        <div className=' py-5 space-x-4'>
            <button className='bg-white bg-opacity-50 px-3 py-2 rounded-md text-white font-semibold'><div className='flex flex-row items-center space-x-2'><FaCirclePlay /><p>Watch</p></div></button>
            <button className='bg-gray-700 bg-opacity-50 px-3 py-2 rounded-md text-white font-semibold'><div className='flex flex-row items-center space-x-2'><IoMdInformationCircleOutline /><p>More info</p></div></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageMovieTitle