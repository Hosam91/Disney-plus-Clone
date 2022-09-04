import x from './movieDetails.module.css'
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function MovieDetails()
{
  const [movieDetails, setMovieDetails] = useState(null)
  const [cast, setCast] = useState([])

  // let { trendingMovies,trendingTv,movieDetails,tvdetails,foryou } = useContext(MoviesContext)
  let param = useParams()


  async function getMovieDetails(id) {

    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`,
    )

    setMovieDetails(data)
  }
  //call movie details
  useEffect(() => {
    getMovieDetails(param.id)
  }, [])

  async function getMovieCridet(id) {

    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f1aca93e54807386df3f6972a5c33b50`,
    )

    setCast(data.cast)

  }
  useEffect(() => {
    getMovieCridet(param.id)
  }, [])


  // recomended

  const [recomended, setRecomended] = useState([])

  async function getRecomended(id)
  {
    let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`
    )
        setRecomended(data.results)
  } 
  useEffect(() => {
    getRecomended(param.id)
  
    
  }, [])

   // similar

   const [similarMovies, setSimilarMovies] = useState([])

   async function getSimilarMovies(id)
   {
     let { data } = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`
     )
     setSimilarMovies(data.results.slice(0,8) )

   } 
   useEffect(() => {
    getSimilarMovies(param.id)
   
     
   }, [])
   
  

  return (
    <>
      <div className="container">
        

      <div className="row">
      <div className="col-md-6   mt-1">
        {movieDetails?
          <>
              <div className="row ">
                
              <div  className={'col-md-6'}>
              <div className={' w-100 h-100  m-2  rounded ' }>
                <img
                  className="w-100 my-4 rounded-5 p-4"
                  src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
                  alt=""
                />
                
              </div>
                </div>
                

                <div  className={'col-md-6'}>
              <div className={' w-100 h-100 mt-5 p-1 rounded ' }>
               
                <h2 className="h2"> {movieDetails?.title}</h2>
                <p className='h6 my-4 '> Overview : <span className='text-muted'> {movieDetails?.overview}</span></p>
                <p className='h6 my-4'> Release date : <span className='text-muted'> {movieDetails?.release_date}</span></p>
                  <p className='h6'> User rating : <span className='text-muted'> {movieDetails?.vote_average}</span></p>

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
        <div className="row  m-auto  p-2 text-center   ">
      <h5 className=' mb-2 mt-lg-5 ' >Similar Movies</h5>
      {similarMovies.map((movie, i) => <>
        <div key={i} className={"col-md-3"}>
        <Link to={`/movieDetails/${movie.id} `}>
            
            <div className={" w-100 h-100  m-2  rounded text-center m-auto"+x.movie}>
              <img
                className="w-100  rounded text-center "
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
        


       




       
        





        
              
      <div className="row m-auto  p-2 gap-3 text-center  position-relative ">
        <h2> The Cast</h2>
        {cast.map((cast, i) => <>
          <div key={i} className="col-md-2 my-1 p-4">
            <div className={' w-100 h-100  p-4  rounded-circle'+x.movie}>
                  
              <img src={'https://image.tmdb.org/t/p/w500' + cast.profile_path} className="w-100 h-100 rounded-circle" alt='' />
            </div>
            <div className="  ">
              <p className="h6 my-4"> {cast.original_name} in {cast.character} </p>
              
          
              </div>
          </div>
        </>)}
          </div>  
             
                    

              
            

      







      
                    
                    
                         
              
            
             
           {/* RECOMENDED FOR YOU */}

            <div className="row  mt-lg-5 my-5 row m-auto  p-2 gap-3 text-center justify-content-between position-relative">
      <h5 className=' mb-2 mt-lg-5 my-5' >More like this</h5>
      {recomended.map((movie, i) => <>
        <div key={i} className={"col-md-1"}>
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
    </>
  )
}
