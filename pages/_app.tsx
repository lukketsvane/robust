import type { AppProps } from 'next/app';
import '../app/globals.css'; 
import NavBar from '../app/components/NavBar'; 
import Chatbot from '../app/components/Chatbot'; 

function MyApp({ Component, pageProps }: AppProps) {
  const currentSection = 0; 
  const sectionColors = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744']; 

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <Component {...pageProps} />
      <Chatbot /> 
    </>
  );
}

export default MyApp;