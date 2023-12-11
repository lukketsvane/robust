import '../app/globals.css';
// pages/_app.tsx
import layout from '@/app/layout';
import type { AppProps } from 'next/app';
import NavBar from '../app/components/NavBar'; // Adjust the path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
