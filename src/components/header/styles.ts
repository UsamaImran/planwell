import { IStyles } from '@/types/global';

export const styles = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
  },
  avatar: {
    width: '11.59px',
    height: '11.59px',
    bgcolor: '#727ed4',
    p: '5px',
    objectFit: 'contain',
  },
  title: {
    mr: 2,
    display: { flexGrow: 0, xs: 'none', md: 'flex' },
    fontFamily: 'DM Sans',
    fontWeight: 700,
    fontSize: '21.3px',
    letterSpacing: '-.28px',
    lineHeight: '25.56px',
    color: 'White',
    textDecoration: 'none',
  },
  titleMobile1: {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'DM Sans',
    fontWeight: 700,
    letterSpacing: '-.28px',
    color: 'White',
    textDecoration: 'none',
    lineHeight: '25.56px',
  },
  titleMobile: { flexGrow: 0, display: { xs: 'flex', md: 'none' } },
} satisfies IStyles;
