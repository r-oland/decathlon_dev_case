import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@vtmn/css/dist/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default behavior is to have a stale time of 0. This means that the query will be refetched on every mount.
      staleTime: 10 * 1000 * 60,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* prevent zoom in on input focus */}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/*  Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
