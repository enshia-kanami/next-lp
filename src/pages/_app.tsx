import { AppProps } from 'next/app';
// import React, { Children } from 'react';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
