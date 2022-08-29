import React from 'react'
import diseny from './images/viewers-disney.png'
import pixar from './images/viewers-pixar.png'
import marvel from './images/viewers-marvel.png'
import starwars from './images/viewers-starwars.png'
import national from './images/viewers-national.png'
import x from './home.module.css'
import vi1 from './videos/1564674844-disney.mp4'
import vi2 from './videos/1564676714-pixar.mp4'
import vi3 from './videos/1564676115-marvel.mp4'
import vi4 from './videos/1608229455-star-wars.mp4'
import vi5 from './videos/1564676296-national-geographic.mp4'
import { useContext } from 'react';
import { MoviesContext } from './../store/store';

import { Link } from 'react-router-dom'



export default function Home()
{
  let {trendingMovies,trendingTv, DiscoverMovie,DiscoverTv}= useContext(MoviesContext)

 
  return (

    <>
      <div className="row">

        

      </div>
      {/* //Icons  */}

      <div className="row m-auto p-3 ">
        <wrap className={'col-sm bg-dark  m-2 p-2 position-relative  '+x.wrap}>
          <img src={diseny} className='h-100 w-100   position-absolute ' alt="" />

          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100  "
          >
            <source src={vi1} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark   m-2 p-2 position-relative '+x.wrap}>
          <img src={pixar}
            className='h-100 w-100   position-absolute ' alt="" />
          <video autoPlay={true} loop={true} playsInline={true} className="w-100 h-100  ">
            <source src={vi2} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark   m-2 p-2 position-relative '+x.wrap}>
          <img src={marvel}
            className='h-100 w-100   position-absolute ' alt="" />
          <video autoPlay={true} loop={true} playsInline={true} className="w-100 h-100 ">
            <source src={vi3} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark   m-2 p-2 position-relative '+x.wrap}>
          <img src={starwars}
            className='h-100 w-100   position-absolute ' alt="" />
          <video autoPlay={true} loop={true} playsInline={true} className="w-100 h-100  ">
            <source src={vi4} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark   m-2 p-2 position-relative '+x.wrap}>
          <img src={national}
           className="w-100 h-100  position-absolute top-0 start-0" alt="" />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100  "
          >
            <source src={vi5} type="video/mp4" />
          </video>
        </wrap>
      </div>
     
      {/* trending MOvies */}
      



     

      <div className="row">
      <h5 className='mb-4 mt-4' >Disney plus Highlight Movies</h5>
      {trendingMovies.map((movie, i) => <>
        <div key={i} className={"col-md-2 my-5 "} >
        <Link to={`/movieDetails/${movie.id} `}>
            
            <div className={" w-100 h-100  m-2  rounded  bg-dark pt-0"+x.movie}>
              <img
                className="w-100  rounded"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=""
              />
             <div class=" bg-dark p-3">
                <h5 class="  bg-dark">{movie.title}</h5>
                <p className='h6'><i class="fa-solid fa-star me-2"></i> <span className='text-muted'> {movie.vote_average}</span></p>
            </div>
            </div>
            </Link>
        </div>
        </>
        )}
      </div>

      {/* trending TV */}
      <div className="row">
        <h5 className='mb-4 mt-4' >Disney plus Highlight SERIRS</h5>
        

      {trendingTv.map((tv, i) => <>
        <div key={i} className={"col-md-2 my-5 "}>
            <Link to={`/tvdetails/${tv.id}`}>
            
            <div className={" w-100 h-100  m-2  rounded  bg-dark pt-0"+x.movie}>
              <img
                className="w-100  rounded"
                src={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
                alt=""
              />
             <div class=" bg-dark p-3">
                <h5 class="  bg-dark">{tv.name}</h5>
                <p className='h6'><i class="fa-solid fa-star me-2"></i> <span className='text-muted'> {tv.vote_average}</span></p>
            </div>
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
      
    
    
      
    
      
      
    
    
    
    

    
    
    
    
    </>
  )
}
