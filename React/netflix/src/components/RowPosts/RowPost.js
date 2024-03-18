import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageurl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovie] = useState([])
  const [urlId,setUrlid] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      console.log(Response.data.results);
      setMovie(Response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((Response)=>{
      console.log(Response.data);
      if(Response.data.results.length!==0){
        setUrlid(Response.data.results[0])
      }else{
        console.log('trailer not available');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :  'poster'} src={`${imageurl+obj.backdrop_path}`}/>
          )}
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost