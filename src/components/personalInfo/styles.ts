import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { LINK_COLOR, PRIMARY_GREEN } from '@/styles/colors';
import { IStyles } from '@/types/global';
import { darkenColor } from '@/utils/utils';

export const styles = {
  containerStyles: { backgroundColor: 'transparent', boxShadow: 0 },
  subContainer: { marginY: 10 },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
    [MEDIUM_AND_SMALL_SCREEN]: { flexDirection: 'column', gap: 2 },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    [MEDIUM_AND_SMALL_SCREEN]: {
      justifyContent: 'center',
    },
  },
  inputLabels: {
    color: (theme) => theme.palette.primary.main,
  },
  button: {
    width: '337px',
    backgroundColor: PRIMARY_GREEN,
    '&:hover': { backgroundColor: darkenColor(PRIMARY_GREEN, 5) },
    [MEDIUM_AND_SMALL_SCREEN]: { width: '80%' },
  },
  link: { color: LINK_COLOR },
} satisfies IStyles;
