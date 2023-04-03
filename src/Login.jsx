import React, { useState } from 'react'
import Spinner from './Spinner.jsx'

const Login = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onLogin()
    }, 2000)
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <button className='btn login' onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  )
}

export default Login
