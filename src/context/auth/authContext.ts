import React, { useContext } from 'react';
import { IAuth } from './types';

export const AuthContext = React.createContext({} as IAuth);
export const AuthContextContainer = AuthContext.Provider;
export const useAuth = () => useContext(AuthContext);
