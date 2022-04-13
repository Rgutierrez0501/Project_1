import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import PersonList from './components/UserNames';
import Emails from './components/Emails'
import Title from './components/Title';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Title/>
      <Profile />
      <PersonList/>
      <Emails/>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
