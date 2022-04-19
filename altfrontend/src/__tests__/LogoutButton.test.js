import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton';
import { Auth0Client } from '@auth0/auth0-spa-js';

describe('test handler LogoutButton', ()=> {
    
    test('responds to onclick handler by end-user', ()=> {
        const logout= function(returnTo) {window.location=origin}
        const isAuthenticated= {logout, useAuth0};
    
    LogoutButton(logout,useAuth0)
    
    expect(onclick(isAuthenticated));
    });

    test('Boolean'), ()=> {
        const useAuth0
    }


});

function App() {
    const { isLoading } = useAuth0
    ();
  
    if (isLoading) return <div>Loading...</div>
    return (
