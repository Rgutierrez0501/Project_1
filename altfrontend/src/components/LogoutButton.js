import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//Logout user
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div className="logoutButton">
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      </div>
    )
  )
}

export default LogoutButton