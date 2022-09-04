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
import { useContext } from 'react'
import { MoviesContext } from './../store/store'

import { Link } from 'react-router-dom'


import x1 from '../../imgs/1.jpg'
import x2 from '../../imgs/2.jpg'
import x3 from '../../imgs/3.jpg'
import x4 from '../../imgs/4.jpg'





export default function Home() {
  let { trendingMovies, trendingTv, DiscoverMovie, DiscoverTv } = useContext(
    MoviesContext,
  )

  return (
    <>
      <div className="container">

      
      <div className="row"></div>
      {/* //Icons  */}

      <div className="row m-auto  p-2 gap-3 text-center justify-content-between position-relative">
        <wrap className={'col-sm bg-dark p-2  position-relative   ' + x.wrap}>
          <img
            src={diseny}
            className="h-100 w-100 top-0 left-0  position-absolute "
            alt=""
          />

          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100  "
          >
            <source src={vi1} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark  p-2  position-relative    ' + x.wrap}>
          <img
            src={pixar}
            className="h-100 w-100  position-absolute   top-0 left-0   "
            alt=""
          />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100  "
          >
            <source src={vi2} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark  p-2  position-relative ' + x.wrap}>
          <img
            src={marvel}
            className="h-100 w-100   position-absolute   top-0 left-0 "
            alt=""
          />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100 "
          >
            <source src={vi3} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark  p-2  position-relative ' + x.wrap}>
          <img
            src={starwars}
            className="h-100 w-100   position-absolute   top-0 left-0  "
            alt=""
          />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="w-100 h-100  "
          >
            <source src={vi4} type="video/mp4" />
          </video>
        </wrap>

        <wrap className={'col-sm bg-dark  p-2  position-relative ' + x.wrap}>
          <img
            src={national}
            className="w-100 h-100  position-absolute top-0 start-0"
            alt=""
          />
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
        
        {/* slider */}

        <div id="carouselExampleControls" className="carousel slide position-relative my-5" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    
                    <img src={x1} className="d-block w-100" alt="..." />
                    
                </div>
                
    <div className="carousel-item">
    <img src={x2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={x3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
    <img src={x4} className="d-block w-100" alt="..."/>
    </div> 
  </div>
  
             <div class="aroows position-absolute top-50 d-flex justify-content-between translate-middle-y w-100  ">
        <div class="arrow-right  text-white   ">
            
            <a class=" btn1 p-2  " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon arrow-left" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
              {/* <!-- <i class="fa-solid fa-chevron-right"></i> --> */}
            </a>
          </div>
        <div class="arrow-left  text-white   ">
            <a class="btn2 p-2 r " type="button"         data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon arrow-right" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              {/* <!-- <i class="fa-solid fa-chevron-left"></i> --> */}

            </a>
        </div>
    </div>
</div>

      {/* trending MOvies */}

      <div className="row   p-3  text-center  position-relative ">
        <h5 className="mb-4 mt-4">Disney plus Highlight Movies</h5>
        {trendingMovies.map((movie, i) => (
          <>
            <div key={i} className={'col-md-2 my-5  p-2 '}>
              <Link to={`/movieDetails/${movie.id} `}>
                <div
                  className={' w-100 h-100    rounded  bg-dark ' + x.movie}
                >
                  <img
                    className="w-100  rounded"
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                    alt=""
                  />
                  <div class=" bg-dark p-3">
                    <h5 class="  bg-dark">{movie.title}</h5>
                    <p className="h6">
                      <i class="fa-solid fa-star me-2"></i>{' '}
                      <span className="text-muted"> {movie.vote_average}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>

      {/* trending TV */}
      <div className="row   p-3  text-center  position-relative ">
        <h5 className="mb-4 mt-4">Disney plus Highlight Series</h5>
        {trendingTv.map((movie, i) => (
          <>
            <div key={i} className={'col-md-2 my-5  p-2 '}>
              <Link to={`/movieDetails/${movie.id} `}>
                <div
                  className={' w-100 h-100    rounded  bg-dark ' + x.movie}
                >
                  <img
                    className="w-100  rounded"
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                    alt=""
                  />
                  <div class=" bg-dark p-3">
                    <h5 class="  bg-dark">{movie.name}</h5>
                    <p className="h6">
                      <i class="fa-solid fa-star me-2"></i>{' '}
                      <span className="text-muted"> {movie.vote_average}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>

      {/* {discover more Movies} */}
      <div className="row   p-3  text-center  position-relative ">
        <h5 className="mb-4 mt-4">Discover More Movies</h5>
        {DiscoverMovie.map((movie, i) => (
          <>
            <div key={i} className={'col-md-2 my-5  p-2 '}>
              <Link to={`/movieDetails/${movie.id} `}>
                <div
                  className={' w-100 h-100    rounded  bg-dark ' + x.movie}
                >
                  <img
                    className="w-100  rounded"
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                    alt=""
                  />
                  <div class=" bg-dark p-3">
                    <h5 class="  bg-dark">{movie.title}</h5>
                    <p className="h6">
                      <i class="fa-solid fa-star me-2"></i>{' '}
                      <span className="text-muted"> {movie.vote_average}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>

      
      {/* {discover more Series} */}
      <div className="row   p-3  text-center  position-relative ">
        <h5 className="mb-4 mt-4">Discover More Series</h5>
        {DiscoverTv.map((movie, i) => (
          <>
            <div key={i} className={'col-md-2 my-5  p-2 '}>
              <Link to={`/movieDetails/${movie.id} `}>
                <div
                  className={' w-100 h-100    rounded  bg-dark ' + x.movie}
                >
                  <img
                    className="w-100  rounded"
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                    alt=""
                  />
                  <div class=" bg-dark p-3">
                    <h5 class="  bg-dark">{movie.name}</h5>
                    <p className="h6">
                      <i class="fa-solid fa-star me-2"></i>{' '}
                      <span className="text-muted"> {movie.vote_average}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>

      </div>
    </>
  )
}
