import { SxProps, Theme } from '@mui/material';

export interface IStyles {
  [key: string]: SxProps<Theme>;
}

export type LocalStorageKey = 'X_AUTH_TOKEN' | 'user' | 'time' | 'myUserValue';
