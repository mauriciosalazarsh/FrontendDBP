// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const UserContext = createContext({
  userId: 1,
  setUserId: () => {},
  jwtToken: '',
  setJwtToken: () => {},
});

// Crear el componente Provider
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(1);
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedJwtToken = localStorage.getItem('jwtToken');
    if (storedUserId) {
      setUserId(storedUserId);
      console.log('UserID set to: ', storedUserId);
    } else {
      console.log('No userID found in localStorage');
    }
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userId, setUserId, jwtToken, setJwtToken }}>
      {children}
    </UserContext.Provider>
  );
};