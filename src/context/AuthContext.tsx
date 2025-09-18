import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { signin, getProfile } from '../api/auth';
import { setToken, removeToken } from '../utils/token';
import type { User } from '../types/auth';
import axios from 'axios';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
  loadProfile: () => Promise<void>;
  setAuthData: (token: string, user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));

  const isAuthenticated = !!token;

  const login = async (identifier: string, password: string) => {
    try {
      const response = await signin({ identifier, password });
      const { access_token: newToken, user: userData } = response;
      setToken(newToken);
      setTokenState(newToken);
      setUser(userData);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        throw new Error(err.response.data.message);
      }
      throw err;
    }
  };

  const logout = () => {
    removeToken();
    setTokenState(null);
    setUser(null);
  };

  const setAuthData = (newToken: string, userData: User) => {
    setToken(newToken);
    setTokenState(newToken);
    setUser(userData);
  };

  const loadProfile = useCallback(async () => {
    if (token && !user) {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch {
        logout();
      }
    }
  }, [token, user]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      login,
      logout,
      loadProfile,
      setAuthData,
    }}>
      {children}
    </AuthContext.Provider>
  );
};