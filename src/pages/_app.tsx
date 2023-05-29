import Layout from '@/components/layout/Layout';
import ApiProvider from '@/context/api/ApiProvider';
import AuthProvider from '@/context/auth/AuthProvider';
import FormProvider from '@/context/form/FormProvider';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import MyThemeProvider from '@/context/theme/ThemeProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ApiProvider>
          <FormProvider>
            <MyThemeProvider>
              <Layout>
                <Component {...pageProps} />
                <ReactQueryDevtools />
              </Layout>
            </MyThemeProvider>
          </FormProvider>
        </ApiProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
