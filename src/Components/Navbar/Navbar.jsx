import React from 'react'
import { Link } from 'react-router-dom'
import x from './navbar.module.css'
import logo from './logo.png'
// import { auth, provider } from '../firebase.jsx';

// import { useDispatch, useSelector } from "react-redux";

// import {selectUserName,selectUserPhoto,setLoginDetails} from "../features/users/UserSlice.jsx"
  

export default function Navbar(props)
{
 
  
  

  
    //   let handleAuth = () =>
    //   {
    //     auth.signInWithPopup(provider).then((result) =>
    //     {
    //       console.log(result); 
    //       setUser(result.user)
    //     }).catch((error) =>
    //     {
    //       alert(error.message);
    //     })
  
    //   }

    

    return (<>
        
        <nav  className="navbar navbar-expand-lg navbar-dark bg-black navbar navbar-default navbar-static-top " >
            <div className="container-fluid">
                <div className={x.logo}>
                    <Link to={''} className="navbar-brand" href="#">
                        <img
                            src={logo}
                            className="w-100  d-inline-block "
                            alt="Disney+ "
                        />
                    </Link>
                </div>
               {}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    
                    <ul className="navbar-nav me-auto mt-2  p-2">
                        
                            
                            <li className="nav-item active  ">

                                <Link to={'home'} className="nav-link" href="#">
                                    <i className={"fa-solid fa-house text-white p-2 " + x.icon}></i>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'search'} className="nav-link" href="#">
                                    <i className={"fa-solid fa-search text-white p-2 " + x.icon}></i>
                                    SEARCH
                                </Link>
                            </li>
                           
                            <li className="nav-item active">
                                <Link to={'originals'} className="nav-link" href="#">
                                    <i className={"fa-solid fa-star text-white p-2 " + x.icon}></i>
                                    ORIGINALS
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'Movies'} className="nav-link" href="#">
                                    <i className={"fa-solid fa-film text-white p-2 " + x.icon}></i>
                                    MOVIES
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'series'} className="nav-link" href="#">
                                    <i className={"fa-solid fa-tv text-white p-2 li" + x.icon}></i>
                                    SERIES
                                </Link>
                        </li>
                     
                        
    </ul>

                    
                    
   

                    <ul className="navbar-nav ms-auto mt-2 p-2 ">
                        {props.userData? <li className="nav-item ms-3 ">
                    <span  className="nav-link  " href="#">
                        <button onClick={props.logout} className={x.button + 'bg-transparent  border px-4 py-2 rounded-1'}> LOGOUT</button>
                    </span>
                        </li> : <>
                        <li className={"nav-item active"}>
                    <Link to={'login'} className={"nav-link "} href="#">
                        <button className={x.button + 'nav-link  bg-transparent  border px-4 py-2 rounded-1'} > LOGIN</button>
                    </Link>
                </li> 
    
               
                        <li className="nav-item ms-3 ">
                    <Link to={'register'} className="nav-link  " href="#">
                        <button className={x.button + 'bg-transparent  border px-4 py-2 rounded-1'}> Join us</button>
                    </Link>
                </li>
                        </>}
                   
            </ul>
        </div>
    
            </div>
        </nav>
    </>
    );
}
