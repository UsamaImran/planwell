import { TEXT_BLUE } from '@/styles/colors';
import { IStyles } from '@/types/global';

export const styles = {
  headerStyles: {
    backgroundColor: TEXT_BLUE,
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    color: 'white',
    fontWeight: 500,
    marginBottom: '40px',
  },
  containerStyles: { padding: '0px !important' },
} satisfies IStyles;
