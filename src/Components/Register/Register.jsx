import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react'
import x from './login.module.css'
import logo1 from './cta-logo-one.png'
import logo2 from './cta-logo-two.png'

export default function Register()
{
 let navigate = useNavigate()
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',

  })
  const [errorValid, setErrorValid] = useState([])
  const [error, setError] = useState('')
let [isLoading,setIsLoading]=useState(false)

  function getUserData(e)
  {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
    console.log(myUser);
  }

  async function submitRegister(e)
  {
    e.preventDefault()
    setIsLoading(true)

    let validiate = validateForm()
    if (validiate.error)
    { 
      setErrorValid(validiate.error.details)
      console.log(validiate.error.details);
      setIsLoading(false)
    } else
    {
      
      let { data } = await axios.post(
        'https://route-egypt-api.herokuapp.com/signup',
        user,
      )
  
      if (data.message === 'success')
      {
        console.log(data)
        setIsLoading(false)
        navigate('/login')
      } else
      {
       
  
        setError(data.message)
        setIsLoading(false)
        console.log(data.message);
      }
      }


    

  }    

  function validateForm() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(30).required(),
      last_name: Joi.string().min(3).max(30).required(),
      age: Joi.number().min(18).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    })

    return schema.validate(user,{abortEarly:false})
  }



  return (<div className=' d-flex flex-column'>
      <img src={logo1} alt="" className='text-center m-auto' />
    <form onSubmit={submitRegister} className="mt-3 mx-auto w-50  ">
    {error.length > 0 ? (
          <div className="alert alert-danger"> {error}</div>
        ) : (
          <div></div>
        )}

      <div className="mb-3">
        <input
          type="text" 
          className="form-control bg-transparent mb-3 p-2 text-light "
          placeholder=" First Name"
          id="first_name"
          name='first_name'
          onChange={getUserData}

        /> 
       
      
       
        
         <input
          type="text" 
          className="form-control bg-transparent mb-3 p-2 text-light "
          placeholder=" Last Name"
          id="last_name"
          name='last_name'
          onChange={getUserData}

        />
        
         
           <input
          type="number" 
          className="form-control bg-transparent mb-3 p-2 text-light "
          placeholder=" Age"
          id="age"
          name='age'
          onChange={getUserData}

        />
        
           <input
          type="email" 
          className="form-control bg-transparent mb-3 p-2 text-light "
          placeholder=" Email"
          id="email"
          name='email'
          onChange={getUserData}

        />
       
           <input
          type="password" 
          className="form-control bg-transparent mb-3 p-2 text-light "
          placeholder=" Password"
          id="password"
          name='password'
          onChange={getUserData}

        />
       
      
        
      </div>
      <button className={'btn ' + x.bttn}>
        {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : 'Join Us'}</button>
       
        
    </form>
<img src={logo2} alt="" className='p-5' />
  </div>
  

  )
}
