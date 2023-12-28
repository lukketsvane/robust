import type { AppProps } from 'next/app';
import '../app/globals.css'; // Ensure this path is correct
import NavBar from '../app/components/NavBar'; // Ensure this path is correct
import Chatbot from '../app/components/Chatbot'; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  const currentSection = 0; // Adjust this according to the logic of your application
  const sectionColors = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744']; // The actual section colors used in your application

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <Component {...pageProps} />
      <Chatbot /> {/* This will render the Chatbot on every page */}
    </>
  );
}

export default MyApp;