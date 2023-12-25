import globals 
import type { AppProps } from 'next/app';
import NavBar from '../app/components/NavBar'; // Adjust the path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  const currentSection = 0; // Replace with the actual current section
  const sectionColors = ['#FFFFFF', '#FF0000']; // Replace with the actual section colors

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
