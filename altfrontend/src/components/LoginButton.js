import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//Login redirects user to Auth0 login page and authenticates user there
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="loginButton" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton