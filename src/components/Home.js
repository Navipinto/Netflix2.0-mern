import React, { useEffect } from 'react'
import Header from './Header'
import HomePageMovie from './HomePageMovie'
import HomePageList from './HomePageList'
import useNowPlayingMovies from '../hooks/useNowPlayingMoviess'
import usePopular from '../hooks/usePopular'
import useToprated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import { useDispatch } from 'react-redux'
import useOnTheAir from '../hooks/useOnTheAir'
import usePopularSeries from '../hooks/usePopularSeries'
import useTopratedSeries from '../hooks/useTopRatedSeries'
import useAiringToday from '../hooks/useAiringToday'
import { setFindByNameResults } from '../redux/MovieSlice'

function Home() {
  const dispatch=useDispatch()
  
  useNowPlayingMovies();
  usePopular();
  useToprated();
  useUpcoming();
  useOnTheAir();
  useAiringToday();
  usePopularSeries();
  useTopratedSeries();
  dispatch(setFindByNameResults(null))
  
  return (
    <div className='w-full h-screen text-black bg-black'>
      <Header/>
      <div className='w-full h-screen bg-black'>
      <HomePageMovie/>
      <HomePageList/>
      </div>
    </div>
  )
}

export default Home