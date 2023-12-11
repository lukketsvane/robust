import '../app/globals.css';
import layout from '@/app/layout';
import type { AppProps } from 'next/app';
import NavBar from '../app/components/NavBar'; // Adjust the path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  // Define the values for currentSection and sectionColors
  // Note: Replace the below values with your actual logic or state
  const currentSection = 0; // This should be set based on your application's requirements
  const sectionColors = ['#FFFFFF', '#000000']; // Replace this with your actual colors array

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
