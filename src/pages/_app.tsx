import Header from '@/features/Header';
// import Footer from '@/features/Footer';
import '@/styles/globals.css';
// import { Footer } from 'antd/es/layout/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
