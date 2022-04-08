import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Emails = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [emails, setEmails] = useState(null);

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
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {emails.map((email) => {
        return <li key={email.id}>{email.email}</li>;
      })}
    </ul>
    
  );
};

export default Emails;