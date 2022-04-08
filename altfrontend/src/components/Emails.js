import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


const Emails = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [emails, setEmails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://p1-api',
          scope: 'read:emails',
        });
        const response = await fetch('https://p1-api/emails', {
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

  axios.get(`http://localhost:3001/emails`,getAccessTokenSilently())
  .then(res => {
    const emails = res.data;
    setEmails({ emails });
  })

  if (!emails) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {emails.map((email, index) => {
        return <li key={index}>{email}</li>;
      })}
    </ul>
  );
};

export default Emails;