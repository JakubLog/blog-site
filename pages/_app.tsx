import '../styles/globals.css';
import '../styles/loading.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainTemplate from '../components/templates/MainTemplate';
import AppProviders from 'providers/AppProviders';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      console.log('Start change');
    });
    router.events.on('routeChangeComplete', () => {
      console.log('Success change');
    });
    router.events.on('routeChangeError', () => {
      console.log('Error change');
    });
  }, [router]);

  return (
    <AppProviders>
      <Head>
        <title>Jakub Michał Fedoszczak{Component?.title ? ` | ${Component?.title}` : null}</title>
      </Head>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </AppProviders>
  );
}

export default MyApp;
