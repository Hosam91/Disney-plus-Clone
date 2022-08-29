import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export let MoviesContext = createContext(0)

export default function MoviesContextProvider(props) {
  let param = useParams()
  // const [foryou, setForyou] = useState([])

  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingTv, setTrendingTv] = useState([])
  const [movieDetails, setMovieDetails] = useState(null)
  const [tvdetails, setTvDetails] = useState(null)

  async function getTrending(mediaType, setTrending) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1&include_adult=false`,
    )

    setTrending(data.results.slice(0, 12))
  }
  useEffect(() => {
    getTrending('movie', setTrendingMovies)
  }, [])

  //CALL highlight series

  useEffect(() => {
    getTrending('tv', setTrendingTv)
  }, [])

  // discover Movies and series
  const [DiscoverMovie, setDiscoverMovie] = useState([])
  const [DiscoverTv, setDiscoverTv] = useState([])


  async function getDiscover(mediaType,setDiscover)
  {
      let {data} = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      setDiscover(data.results)

  }
  useEffect(() => {
    getDiscover('movie', setDiscoverMovie)
  }, [])

  //CALL Discover series

  useEffect(() => {
    getDiscover('tv', setDiscoverTv)
  }, [])

  //get movies and series details

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

  async function getTvDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`,
    )

    setTvDetails(data)
  }
  //call TV details
  useEffect(() => {
    getTvDetails(param.id)
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        trendingMovies,
        trendingTv,
        movieDetails,
        tvdetails,
        param,
        DiscoverMovie,
        DiscoverTv
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  )
}
