import React, { useState } from 'react';

type Authuser = {
    name: string,
    email: string
}

const User = () => {
    
    // // useState Future Value
    // const [user, setUser] = useState<Authuser | null>(null)
    
    // useState Type assertion
    const [user, setUser] = useState<Authuser>( {} as Authuser)
    
    const handleLogin = () => {
        setUser({
            name: 'Wasim',
            email: 'wasim@email.com'
        })
    }
    
    // // commented due to type assertion that in future also user will not be null
    // const handleLogout = () => {
    //     setUser(null)
    // }
  return (
      <div>
          <button onClick={handleLogin} >Log In</button>
          
          {/* <button onClick={handleLogout} >Log Out</button> */}
          {/* <span>User name is { user?.name } </span>
              optional chaining comes by default as user can be null or an object
          <span>User email is {user?.email} </span> */}
          
          {/* type assertion*/}
          <span>User name is { user.name } </span>
          <span>User email is {user.email} </span>
    </div>
  )
}

export default User