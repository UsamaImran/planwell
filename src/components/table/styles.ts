import { TEXT_BLUE } from '@/styles/colors';
import { IStyles } from '@/types/global';
import { SxProps, Theme } from '@mui/material';

export const styles = {
  rowStyles: {
    color: TEXT_BLUE,
    fontWeight: 700,
    width: '100px',
  },
  noStripes: { borderBottom: 'none' },
  tableStyles: {
    minWidth: 550,
    marginBottom: '20px',
    backgroundColor: '#FAFAFA',
  },
} satisfies IStyles;

export const getRowStyles = (isEven: boolean) =>
  ({
    '&:last-child td, &:last-child th': { border: 0 },
    backgroundColor: !isEven ? '#FAFAFA' : 'white',
  } satisfies SxProps<Theme>);
