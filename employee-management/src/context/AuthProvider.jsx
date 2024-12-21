import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : []; // Load from localStorage or use default value
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData)); // Sync to localStorage whenever userData changes
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider