import React, { useEffect, useState } from 'react'
import HomePageMovieTitle from './HomePageMovieTitle'
import { useSelector } from 'react-redux';
import ImageandVideoBackground from './ImageandVideoBackground';
import { useAuth } from '../Context/AuthContext';

function HomePageMovie() {
  const{randomnumber,setrandomnumber,isHome,isMovie,isSeries}=useAuth()
  useEffect(() => {
    let count=0;
    if(count<1) 
      {
       const number=Math.floor(Math.random() * 19) - 0;
       setrandomnumber(number)
       count=count+1;
      }
  }, [])
  const nowplaying = useSelector((store) => store.movie?.NowPlayingMovie)
  const popularseries = useSelector((store) => store.movie?.PopularSeries)
  if(!nowplaying)return;
  if(!popularseries)return;
  
  
  const { title, id, overview } = nowplaying[randomnumber]
  const series = popularseries[randomnumber]
  
  
  return (
    <div className='w-full h-screen'>
      {isSeries && <><ImageandVideoBackground id={series.id} />
        <HomePageMovieTitle title={series.name} description={series.overview} /></>}
        {isMovie&&<>
        <ImageandVideoBackground id={id} />
        <HomePageMovieTitle title={title} description={overview} /></>}
      {isHome && <>
        <ImageandVideoBackground id={id} />
        <HomePageMovieTitle title={title} description={overview} /></>}
    </div>
  )
}

export default HomePageMovie