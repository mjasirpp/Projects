import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageurl} from'../../constants/constants'

function Banner() {
  const [movie,SetMovie] =useState([])
  useEffect(()=>{
    axios.get(`movie/popular?api_key=${API_KEY}`).then((Response)=>{
      console.log(Response.data.results);
      SetMovie(Response.data.results[Math.floor(Math.random()*Response.data.results.length)])
    }).catch(err=>{
      alert('Network Error')
    })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie? imageurl+movie.backdrop_path : ''})`}}
     className='banner'>
        <div className="content">
            <h1 className='title' >{movie? movie.title :  ''}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview :  ''}</h1>
            <div className="fade_bootom"></div>
        </div>
    </div>
  )
}

export default Banner