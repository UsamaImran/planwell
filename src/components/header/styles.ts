import { IStyles } from '@/types/global';
import React from 'react';

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

export const headerStyles = {
  headerContainer: {
    height: '322px',
    backgroundSize: { md: 'contain', xs: 'cover' },
    px: { md: 15, xs: 'auto' },
  },
  navContainer: {
    color: 'white',
    mt: 5,
    width: { md: '50%', xs: '100%' },
  },
  greet: {
    lineHeight: '36px',
    lineHeightStep: '36px',
    fontFamily: 'DM Sans',
    letterSpacing: '-0.4px',
    fontSize: '30px',
    fontWeight: 700,
    minWidth: '295.41px',
    textTransform: 'capitalize',
  },
  day: {
    letterSpacing: '-0.4px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    pt: 1,
    fontFamily: 'DM Sans',
    minWidth: '199.28px',
    textTransform: 'capitalize',
  },
} satisfies IStyles;

export const headerCSS = {
  height: 322,
  background:
    'linear-gradient(90deg, rgba(39,55,163,1) 0%, rgba(49,66,185,1) 0%, rgba(53,72,197,1) 100%)',
  objectPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
} as React.CSSProperties;
