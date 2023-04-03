import React, { useState } from 'react'
import Spinner from './Spinner.jsx'

const Logout = ({ onLogout }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onLogout()
    }, 2000)
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <button className='btn logout' onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  )
}

export default Logout
