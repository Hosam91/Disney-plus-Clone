import x from './series.module.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { MoviesContext } from './../store/store'
import { Link } from 'react-router-dom'

export default function SeriesDetails() {
  const [tvdetails, setTvDetails] = useState(null)

  const [cast, setCast] = useState([])
  let { trendingMovies, trendingTv, foryou } = useContext(MoviesContext)

  // let { trendingMovies,trendingTv,movieDetails,tvdetails,foryou } = useContext(MoviesContext)
  let param = useParams()

  async function getTvDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`,
    )

    setTvDetails(data)
  }
  //call movie details
  useEffect(() => {
    getTvDetails(param.id)
  }, [])

  async function getMovieCridet(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=f1aca93e54807386df3f6972a5c33b50`,
    )

    setCast(data.cast)
    console.log(data.cast)
  }
  useEffect(() => {
    getMovieCridet(param.id)
  }, [])

  // recomended

  const [recomended, setRecomended] = useState([])

  async function getRecomended(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`,
    )
    setRecomended(data.results.slice(0,8) )
  }
  useEffect(() => {
    getRecomended(param.id)
  }, [])

  return (<>
    

    <div className="row">
      <div className="col-md-6   mt-1">
        {tvdetails?
          <>
              <div className="row ">
                
              <div  className={'col-md-6'}>
              <div className={' w-100 h-100  m-2  rounded ' }>
                <img
                  className="w-100 my-4 rounded-5 p-4"
                  src={'https://image.tmdb.org/t/p/w500' + tvdetails.poster_path}
                  alt=""
                />
                
              </div>
                </div>
                

                <div  className={'col-md-6'}>
              <div className={' w-100 h-100 mt-5 p-1 rounded ' }>
               
                <h2 className="h2"> {tvdetails?.name}</h2>
                <p className='h6 my-4 '> Overview : <span className='text-muted'> {tvdetails?.overview}</span></p>
                <p className='h6 my-4'> Release date : <span className='text-muted'> {tvdetails?.release_date}</span></p>
                  <p className='h6'> User rating : <span className='text-muted'> {tvdetails?.vote_average}</span></p>

                </div>
            </div>

            </div>
           
           
           
            </>: <div className='vh-100 d-flex justify-content-center align-items-center'>
                <i className='fa fa-spinner fa-spin fa-3x'></i>
                 </div>  
        }
        </div>


        <div className="col-md-6">

        {/* Similar Movies */}
        <div className="row  ">
      <h5 className=' mb-2 mt-lg-5 ' >Similar Series</h5>
      {recomended.map((movie, i) => <>
        <div key={i} className={"col-md-3"}>
        <Link to={`/movieDetails/${movie.id} `}>
            
            <div className={" w-100 h-100  m-2  rounded  "+x.movie}>
              <img
                className="w-100 my-4 rounded"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=""
              />
              <h6 className="h6"> {movie.title}</h6>
            </div>
            </Link>
        </div>
        </>
        )}
        </div>




          </div>


        </div>









      
      <div className="row">
          <h2> The Cast</h2>
          {cast.map((cast, i) => (
            <>
              <div key={i} className="col-md-2 my-1 p-4">
                <div className={' w-100 h-100  p-4 rounded ' + x.movie}>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
                    className="w-100 h-100 rounded"
                    alt=""
                  />
                </div>
                <div className="  ">
                  <p className="h6 my-4">
                    {' '}
                    {cast.original_name} in {cast.character}{' '}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
    </>
  )
}
