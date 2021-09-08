import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: ''
  })

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    userStorage && setUser(JSON.parse(userStorage));
  }, [user])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)