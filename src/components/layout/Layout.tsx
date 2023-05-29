import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header from '../header/Header';

function Layout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
