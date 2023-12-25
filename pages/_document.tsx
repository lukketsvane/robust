import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body style={{ fontFamily: 'Inter, sans-serif' }}> 
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
