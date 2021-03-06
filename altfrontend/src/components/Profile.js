import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//import JSONPretty from 'react-json-pretty';

//Checks if user is authenticated and returns information based on users account
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  

  return (
    isAuthenticated && ( 
     <div className='styleBox'>
       
        <img src={user.picture} alt={user.name} />
        <h2>Hello, {user.name}</h2>
        
        <p>Email: {user.email}</p>
        {/* <JSONPretty data={user} />        */}
        
      </div>
    )
  )
}

export default Profile