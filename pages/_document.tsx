import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => Component
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pl'>
        <Head>
          {/* Meta tags for site */}
          <meta name='description'
                content="Web Developer's blog with passion to IT. Security, programming, machine learning and more!" />
          <meta property=' og:title' content=' Jakub Michał Fedoszczak - Blog about IT' />
          <meta property='og:description'
                content="Web Developer's blog with passion to IT. Security, programming, machine learning and more!" />
          <meta property='og:locale' content='pl_PL' />
          <meta property='og:type' content='website' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='og:url' content='https://www.fedoszczak.ovh/' />
          <link rel='canonical' href='https://www.fedoszczak.ovh/' />
          {/* Icons for site */}
          <link rel='apple-touch-icon' sizes='57x57' href='/static/favicons/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/static/favicons/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/static/favicons/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/static/favicons/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/static/favicons/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/static/favicons/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/static/favicons/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/static/favicons/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/static/favicons/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/static/favicons/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <meta name='msapplication-TileColor' content='#eee' />
          <meta name='msapplication-TileImage' content='/static/favicons/ms-icon-144x144.png' />
          <meta name='theme-color' content='#5cee42' />
          <meta name='background-color' content='#eee' />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
