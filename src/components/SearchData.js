import React from 'react'
import Header from './Header'
import useSearchQuery from '../hooks/useSearchQuery'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

function SearchData() {
  useSearchQuery()
  const data=useSelector((store)=>store?.movie?.searchResults)
  return (
    <div className='bg-black w-full h-screen'>
        <Header/>
        <div className='flex flex-col w-full px-4 text-start py-14 h-screen+[100px] bg-black'>
          <h2 className='text-2xl font-semibold text-white py-4 px-8'>Results:</h2>
          <div className='flex flex-row flex-wrap gap-3 items-center mx-auto py-4 justify-center'>
            {
              Array.isArray(data)&&data?.map((item)=>{
                return (
                  <MovieCard key={item.id} img={item.poster_path} />
                )
              })
            }
            
            
            
          </div>
        </div>
    </div>
  )
}

export default SearchData