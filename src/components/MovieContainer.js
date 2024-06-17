import React from 'react'
import MovieCard from './MovieCard'

function MovieContainer(props) {
    const{movies,title}=props
  return (
    <div>
            <h2 className='text-white text-xl py-3 font-bold'>{title}</h2>
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
              <div className='flex space-x-3 items-center'>

            {Array.isArray(movies)&&movies?.map((item)=>{
                return (

                    <MovieCard key={item.id} img={item.poster_path} title={item.title}/>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default MovieContainer