import React from 'react'
import { useSelector } from 'react-redux'
import MovieContainer from './MovieContainer'
import { useAuth } from '../Context/AuthContext'
import { AiringTodaySeries } from '../Constant/Constant'

function HomePageList() {
  const{isHome,isMovie,isSeries}=useAuth()
  const topmovies=useSelector((store)=>store.movie?.TopRated)
  const upcomingmovies = useSelector((store) => store.movie?.Upcoming)
  const nowplaying = useSelector((store) => store.movie?.NowPlayingMovie)
  const popularmovies = useSelector((store) => store.movie?.PopularMovies)
  const popularseries = useSelector((store) => store.movie?.PopularSeries)
  const topratedseries = useSelector((store) => store.movie?.TopRatedSeries)
  const airingtodayseries = useSelector((store) => store.movie?.AiringToday)
  const ontheairseries = useSelector((store) => store.movie?.OnTheAir)
  return (
    <div className='w-full absolute text-start -my-32 bg-black py-4 px-4'>
      {isHome&&<div>
        <MovieContainer movies={topmovies} title={"Top rated movies"}/>
        <MovieContainer movies={airingtodayseries} title={"Airing Today"} />
        <MovieContainer movies={nowplaying} title={"Now Playing movies"} />
        <MovieContainer movies={popularseries} title={"Popular series"} />
      </div>}
      {isMovie&&<div>
        <MovieContainer movies={topmovies} title={"Top rated movies"} />
        <MovieContainer movies={upcomingmovies} title={"Upcoming movies"} />
        <MovieContainer movies={nowplaying} title={"Now Playing movies"} />
        <MovieContainer movies={popularmovies} title={"Popular movies"} />
      </div>}
      {isSeries&&<div>
        <MovieContainer movies={topratedseries} title={"Top rated series"} />
        <MovieContainer movies={ontheairseries} title={"On The Air"} />
        <MovieContainer movies={airingtodayseries} title={"Airing Today"} />
        <MovieContainer movies={popularseries} title={"Popular series"} />
      </div>}
    </div>
  )
}

export default HomePageList