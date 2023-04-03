import React from 'react'

const Login = ({ onLogin }) => {
  const handleClick = () => {
    onLogin()
  }

  return (
    <button className='btn login' onClick={handleClick}>
      Login
    </button>
  )
}

export default Login
