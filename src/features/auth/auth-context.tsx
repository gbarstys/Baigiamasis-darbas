import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, Admin } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService, { AuthPromise } from './auth-service';
import pause from '../../helpers/pause';

export type AuthContextType = {
  admin: null | Admin,
  loggedIn: boolean,
  error: string | null,
  loading: boolean,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useLocalStorage<AuthContextType['admin']>('admin', null);
  const [error, setError] = useState<AuthContextType['error']>(null);
  const [loading, setLoading] = useState<AuthContextType['loading']>(false);

  const authenticate = async (crudentials: Crudentials, authMethod: AuthPromise, next = '/') => {
    try {
      setLoading(true);
      await pause(3000);
      const loggedInAdmin = await authMethod(crudentials);
      setAdmin(loggedInAdmin);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const login: AuthContextType['login'] = async (crudentials, next) => {
    if (error) setError(null);
    authenticate(crudentials, AuthService.login, next);
  };

  const logout: AuthContextType['logout'] = () => {
    setAdmin(null);
    navigate('/admin');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    admin,
    loggedIn: Boolean(admin),
    error,
    loading,
    clearError,
    login,
    logout,
  }), [admin, error, loading]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
