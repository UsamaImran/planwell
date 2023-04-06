import React, { PropsWithChildren } from 'react';
import createEmotionCache from '@/utils/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '@/components/theme/theme';

const clientSideEmotionCache = createEmotionCache();

function MyThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyThemeProvider;
