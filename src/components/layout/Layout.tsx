import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import Header from '../header/Header';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  const isResultsPage = pathname.includes('results');
  return (
    <Box>
      {!isResultsPage && <Header />}
      <Box
        sx={{ transform: !isResultsPage ? 'translateY(-180px)' : 'inherit' }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
