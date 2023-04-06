import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LocalStorageKey } from '@/types/global';
import React, { PropsWithChildren, useState } from 'react';
import { AuthContextContainer } from './authContext';
import { IAuth } from './types';

function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] =
    useState<IAuth['currentUser']>(undefined);

  const { setItem, clearStorage } =
    useLocalStorage<LocalStorageKey>('X_AUTH_TOKEN');

  const authenticateUser = (token: string) => {
    setItem!(token);
    setCurrentUser({ name: 'usama' });
  };

  const logout = () => {
    setCurrentUser(undefined);
    clearStorage!();
  };

  const contextValues: IAuth = {
    authenticateUser,
    currentUser,
    logout,
    isLoggedIn: !!currentUser,
  };

  return (
    <AuthContextContainer value={contextValues}>
      {children}
    </AuthContextContainer>
  );
}

export default AuthProvider;
