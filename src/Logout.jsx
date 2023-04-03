import React from 'react'

const Logout = ({ onLogout }) => {
  const handleClick = () => {
    onLogout()
  }

  return (
    <button className='btn logout' onClick={handleClick}>
      Logout
    </button>
  )
}

export default Logout
