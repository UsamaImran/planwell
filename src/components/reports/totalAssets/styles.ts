import { PRIMARY_GREEN } from '@/styles/colors';
import { IStyles } from '@/types/global';

export const styles = {
  headerStyles: {
    backgroundColor: PRIMARY_GREEN,
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
  titleStyles: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  tableContainer: {
    paddingX: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginY: '40px',
  },
  tableSectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    marginY: 5,
  },
} satisfies IStyles;
