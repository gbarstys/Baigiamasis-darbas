import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin from '../types/admin';
import useLocalStorage from '../hooks/use-local-storage-state';

export type AuthContextType = {
  admin: null | Admin,
  loggedIn: boolean,
  login: () => void,
  logout: () => void,
};

const initialValue: AuthContextType = {
  admin: null,
  loggedIn: false,
  login: () => {
    throw new Error('AuthContext.login is not implemented');
  },
  logout: () => {
    throw new Error('AuthContext.logout is not implemented');
  },
};

const AuthContext = createContext(initialValue);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [admin, setAdmin] = useState<AuthContextType['admin']>(null);

  const login: AuthContextType['login'] = () => {
    setLoggedIn(true);
    console.log(setLoggedIn);
    navigate('/uzsakymai');
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const providerValue = useMemo(() => ({
    admin,
    loggedIn,
    login,
    logout,
  }), [loggedIn, admin]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
