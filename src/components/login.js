import React, { useState } from 'react';
import { useAuth } from '../context/auth'

function Login() {
  const [username, setUsername] = useState("")
  const { setUser } = useAuth()

   const handleLogin = () => {
     if(username) {
       localStorage.setItem('user', JSON.stringify({name: username}))
       setUser({ name: username })
     }
   }

   const handleLogout = () => {
     localStorage.removeItem('user')
     setUser({ name: ''})
   }

  return (
    <div>
      <h1>Login:</h1>
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Logar</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;