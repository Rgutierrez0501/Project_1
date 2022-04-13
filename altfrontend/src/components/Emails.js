import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


//Component to make a call to protected API to get emails
const Emails = () => {
  const { getAccessTokenSilently } = useAuth0();  //hook for Auth0 to get token
  const [emails, setEmails] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://p1-api',
         
        });

       

        const response = await fetch('http://localhost:3001/emails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmails(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);


  if (!emails) {
    if(!isAuthenticated){
      return <h3>Login to view emails</h3>
    }
    return <div>Loading...</div>;
  }
  
  return (
    isAuthenticated && (
      <div className='styleBox'>
      <h2>Emails</h2>
    <ul>
      {emails.map((email) => {
        return <li key={email.id}>{email.id}.{email.email}</li>;
      })}
    </ul>
    </div>
    )
  );
};

export default Emails;