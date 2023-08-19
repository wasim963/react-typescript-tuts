import React, { useState } from 'react'

const LoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
  return (
      <div>
          <button onClick={handleLogin} >Log In</button>
          <button onClick={handleLogout} >Log Out</button>
          <span>User is { loggedIn ? 'Logged In' : 'Logged Out' } </span>
    </div>
  )
}

export default LoggedIn