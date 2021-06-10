import Head from 'next/head';
import Header from '../src/components/header/Header';

import '../src/assets/scss/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="page_container" className="overflow-hidden">
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
