import { IStyles } from '@/types/global';

export const styles = {
  buttonStyles: {
    width: '454px',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'space-between',
    height: '45px',
    '&.Mui-disabled': {
      cursor: 'none',
    },
  },
} satisfies IStyles;
