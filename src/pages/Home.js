import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleSignout = () => {
    auth.signout();
    navigate('/signin')
  }
  return (
    <div className='home' color='red'>
      <h1>Home</h1>
      <p>Welcome {auth.user} to signin</p>
      <button onClick={handleSignout}>logout</button>
    </div>
  );
}

export default Home;