import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, Admin } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService, { AuthPromise } from './auth-service';

export type AuthContextType = {
  admin: null | Admin,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useLocalStorage<AuthContextType['admin']>('admin', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const authenticate = async (crudentials: Crudentials, authMethod: AuthPromise, next = '/') => {
    try {
      const loggedInAdmin = await authMethod(crudentials);
      setAdmin(loggedInAdmin);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const login: AuthContextType['login'] = async (crudentials, next) => {
    if (error) {
      setError(null);
    }
    authenticate(crudentials, AuthService.login, next);
  };

  const logout: AuthContextType['logout'] = () => {
    setAdmin(null);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    admin,
    loggedIn: Boolean(admin),
    error,
    clearError,
    login,
    logout,
  }), [admin, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
