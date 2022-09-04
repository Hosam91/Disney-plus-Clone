import React from 'react'
import x from './movieDetails.module.css'
import { useContext } from 'react';
import { MoviesContext } from './../store/store';
import { Link } from 'react-router-dom'


export default function Movies()
{
  let {trendingMovies, DiscoverMovie}= useContext(MoviesContext)

  return (<>
          <div className="container">

      <div className="row">
      <h5 className='mb-4 mt-4' >Disney plus Highlight Movies</h5>
      {trendingMovies.map((movie, i) => <>
        <div key={i} className={"col-md-2"}>
        <Link to={`/movieDetails/${movie.id} `}>
            
            <div className={" w-100 h-100  m-2 p-2 rounded "+x.movie}>
              <img
                className="w-100 my-4 rounded"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=""
              />
              {/* <h2 className="h6"> {movie.title}</h2> */}
            </div>
            </Link>
        </div>
        </>
        )}
    </div>
    
    
      {/* {discover more Movies} */}

      <div className="row">
      <h5 className='mb-4 mt-4' >Discover More Movies </h5>
      {DiscoverMovie.map((movie, i) => <>
        <div key={i} className={"col-md-2"}>
        <Link to={`/movieDetails/${movie.id} `}>
            
            <div className={" w-100 h-100  m-2 p-2 rounded "+x.movie}>
              <img
                className="w-100 my-4 rounded"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=""
              />
              {/* <h2 className="h6"> {movie.title}</h2> */}
            </div>
            </Link>
        </div>
        </>
        )}
      </div>
  
  
  
  
  
  
  
  </div>
  </>
    
  )
}
