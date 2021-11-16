import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jakub Michał Fedoszczak{Component?.title ? ` | ${Component?.title}` : null}</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
