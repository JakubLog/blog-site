import '../styles/globals.css';
import '../styles/loading.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainTemplate from '../components/templates/MainTemplate';
import AppProviders from 'providers/AppProviders';

function MyApp({ Component, pageProps }: AppProps) {
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
