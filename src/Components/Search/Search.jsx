import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Search()

{
  const [searchMovie, setSearchMovie] = useState([])

  async function searchMovies()
  {
    let data = await axios.get('https://api.themoviedb.org/3/search/multi?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1&include_adult=false')


    setSearchMovie(data.results)
        console.log("the response"+data.results)
  }

  useEffect(() =>
  {
    
    searchMovies()

  },[])

  return (
<div className='vh-100 d-flex justify-content-center align-items-center'>
                <i className='fa fa-spinner fa-spin fa-3x'></i>
                 </div>    )
}
