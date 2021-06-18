import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import Header from '../src/components/header/Header';

import '../src/assets/scss/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextNprogress color="#1CE2D8" startPosition={0.3} stopDelayMs={200} height={3} />

      <div id="page_container" className="overflow-hidden bg-theme_blue">
        <Header />
        <div className="main_content lg:px-[5rem] px-[15px]">
          <div className="main_content_inner">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
