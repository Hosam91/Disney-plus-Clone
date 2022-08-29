import React, { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

import x from './login.module.css'
import logo1 from './cta-logo-one.png'
import logo2 from './cta-logo-two.png'

export default function Login(props) {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const [errorValid, setErrorValid] = useState([])

  const [error, setErorr] = useState('')

  function getUserData(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value

    setUser(myUser)
    console.log(myUser)
  }

  async function submitLogin(e) {
    e.preventDefault()
    setIsLoading(true)

    let validationResult = validateForm()

    if (validationResult.error) {
      setErrorValid(validationResult.error.details)
      setIsLoading(false)
    } else {
      let { data } = await axios.post(
        'https://route-egypt-api.herokuapp.com/signin',
        user,
      )

      if (data.message === 'success') {
        console.log(data)
        setIsLoading(false)
        localStorage.setItem('userToken', data.token)

        props.saveUserData()
        navigate('/home')

      } else {
        setErorr(data.message)
        setIsLoading(false)
        console.log(data.message)
      }
    }
  }
  function validateForm() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    })

    return schema.validate(user, { abortEarly: false })
  }

  return (
    <>
      <div className=' d-flex flex-column'>
      <img src={logo1} alt="" className='text-center m-auto mb-5' />
      <form onSubmit={submitLogin} className="mt-5 mb-5 mx-auto w-50  ">
        {error.length > 0 ? (
          <div className="alert alert-alert-alert-danger w-50"> {error}</div>
        ) : (
          ''
        )}
        <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent mb-3 p-2 text-light  "
              placeholder="username/Email"
              id="email"
              name="email"
              onChange={getUserData}
            />
           
          
          <input
            type="password"
            className="form-control bg-transparent  p-2 text-light"
            id="password"
            name="password"
            placeholder="password"
            onChange={getUserData}
          />
        </div>
        <button className={'btn ' + x.bttn}>
          {' '}
          {isLoading === true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            'Login'
          )}
          </button>
          
      </form>
      <img src={logo2} alt="" className='text-center m-auto mt-5' />
      </div>
    </>
  )
}
