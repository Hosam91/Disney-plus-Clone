import { Routes, Route , useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login';
import Movies from './Components/Movies/Movies';
import Search from './Components/Search/Search';
import Series from './Components/Series/Series';
import Register from './Components/Register/Register';

import jwtDecode from 'jwt-decode'

import React, { useEffect, useState } from 'react'
import MoviesContextProvider from './Components/store/store';
import MovieDetails from './Components/Movies/MovieDetails.jsx';
import SeriesDetails from './Components/Series/SeriesDetails';


function App()
{
  let navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  
  function saveUserData()
  {
    let encodedToken = localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken)
  }
  useEffect(() =>
  {
    if (localStorage.getItem('userToken'))
    {
      saveUserData()
      }

  }, [])

  function logout()
  {
    setUserData(null);
    localStorage.removeItem('userToken');
    navigate('login')
  }
  function ProtectedRoute(props)
  {

    if (localStorage.getItem('userToken') === null)
    {
      return <Navigate to={ '/login'} />
    } else
    {
      return props.children
      
    }
    
    
  }

  
  return (<>
    < MoviesContextProvider>
    <Navbar userData={userData} logout={ logout}/>

    {/* <div className="container "> */}
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='home' element={ <Home/>} />
        <Route path='login' element={ <Login saveUserData={saveUserData}/>} />
          <Route path='movies' element={<Movies />} />

             <Route path='movieDetails'element={<MovieDetails />
             }>
                <Route path=':id'   element={<MovieDetails />}/>
          </Route>
          <Route path='series' element={<Series />} />
          
          <Route path='tvdetails' element={<SeriesDetails />
          }>
            <Route path=':id' element={<SeriesDetails />} />
            
          </Route>

        <Route path='search' element={<Search />} />
        <Route path='register' element={<Register  />} />

      <Route path='*' element={<> <h1>404 Eror<br/>Not Found</h1></> } />
        


        </Routes>

      {/* </div> */}
      </MoviesContextProvider>
    </>
  );
}

export default App;
