import '../styles/globals.css';
import '../styles/loading.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainTemplate from '../components/templates/MainTemplate';
import AppProviders from 'providers/AppProviders';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'styles/nprogress.css';
import 'nprogress/nprogress.css';
import 'styles/animations.css';
import { pageview } from '../helpers/ga';
import { AnimatePresence, motion } from 'framer-motion';
import { routesVariant } from '../variants/Routing';

// eslint-disable-next-line
const handleStartLoading = (url: any) => {
  NProgress.start();
  pageview(url);
};
const handleStopLoading = () => {
  NProgress.done();
};

function MyApp({ Component, pageProps }: AppProps & { Component: { title?: string } }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleStartLoading);
    router.events.on('routeChangeComplete', handleStopLoading);
    router.events.on('routeChangeError', handleStopLoading);
    return () => {
      router.events.off('routeChangeStart', handleStartLoading);
      router.events.off('routeChangeComplete', handleStopLoading);
      router.events.off('routeChangeError', handleStopLoading);
    };
  }, [router]);

  return (
    <AppProviders>
      <Head>
        <title>Jakub Michał Fedoszczak{Component?.title ? ` | ${Component?.title}` : null}</title>
      </Head>
      <MainTemplate>
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.asPath} variants={routesVariant} initial="initial" animate="animate">
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MainTemplate>
    </AppProviders>
  );
}

export default MyApp;
