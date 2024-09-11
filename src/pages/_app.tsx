import Footer from '@/features/Footer';
import Header from '@/features/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='.page-container'>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
