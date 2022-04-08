import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

ReactDOM.render(
  <Auth0Provider //Passes Auth0 data as props to the App so they have access to application information
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

