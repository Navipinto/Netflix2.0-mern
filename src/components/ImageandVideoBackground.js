import React, { useState } from 'react'
import useRandomMovieImage from '../hooks/useRandomMovieImage';
import { useSelector } from 'react-redux';
import useRandomMovieVideo from '../hooks/useRandomMovieVideo';
import { useAuth } from '../Context/AuthContext';

function ImageandVideoBackground(props) {
  const {isSeries,isMovie,isHome}=useAuth()
    const [showimg, setshowimg] = useState(true)
    setTimeout(() => {
        setshowimg(false)
    }, 4000);

    useRandomMovieImage(props.id)
    useRandomMovieVideo(props.id)

    const Homepageimg = useSelector((store) => store?.movie?.Posterimage)
    const Homepagevideokey = useSelector((store) => store?.movie?.PosterVideo)
  return (
    <div>
          <img src={`https://image.tmdb.org/t/p/w500${Homepageimg}`} alt="" className={`w-full h-screen absolute ${showimg ? "" : "hidden"} -mt-14`} />
          {isSeries&&<iframe className={`w-screen h-screen ${showimg ? "hidden" : ""} -mt-16 absolute z-0`} src={`https://api.themoviedb.org/3/tv/{series_id}/videos`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>}
          <iframe className={`w-screen h-screen ${showimg?"hidden":""} -mt-16 absolute z-0`} src={`https://www.youtube.com/embed/${Homepagevideokey}?si=VKhI0TPTmiu9qlgG&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default ImageandVideoBackground
