import React from 'react';
import { useAuth } from '../context/auth'

function Profile() {
  const {user} = useAuth()
  return <div>
    <h1>Profile</h1>
    {user.name && <span>User: {user.name}</span>}

  </div>;
}

export default Profile;