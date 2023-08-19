import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
    const userContext = useContext( UserContext )
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Wasim',
                email: 'wasim@example.com'
            })
        }
    };
    
    const handleLogut = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    };
  return (
      <div>
          <button onClick={handleLogin} >Log In</button>
          <button onClick={handleLogut} >Log Out</button>
          <h3>User name is - { userContext?.user?.name }</h3>
          <h3>User email is - { userContext?.user?.email } </h3>
    </div>
  )
}