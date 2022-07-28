import { AppProps } from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        {/* <body>
          <div className="relative min-h-screen">
        <Component {...pageProps} />
        <Footer/>
        </div>
      </body> */}
      </Layout>
    </>
  );
}
