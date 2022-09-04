import React from 'react'
import x from './series.module.css'
import { useContext } from 'react';
import { MoviesContext } from './../store/store';
import { Link } from 'react-router-dom'


export default function Series()
{
  
  let {trendingMovies,trendingTv, DiscoverMovie,DiscoverTv}= useContext(MoviesContext)













  return (<>
  
    <div className="container">
   {/* trending TV */}
   <div className="row">
        <h5 className='mb-4 mt-4' >Disney plus Highlight SERIRS</h5>
        

      {trendingTv.map((tv, i) => <>
        <div key={i} className={"col-md-2"}>
            <Link to={`/tvdetails/${tv.id}`}>
            
            <div className={" w-100 h-100  m-2 p-2 rounded "+x.movie}>
              <img
                className="w-100 my-4 rounded"
                src={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
                alt=""
              />
              {/* <h2 className="h6"> {tv.name}</h2> */}
          </div>
          </Link>
        </div>
        </>
        )}
    </div>
      {/* {discover more Series} */}

      <div className="row">
      <h5 className='mb-4 mt-4' >Discover More Series </h5>
      {DiscoverTv.map((movie, i) => <>
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
