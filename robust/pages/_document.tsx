import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Vesterbro:wght@700&display=swap"
          />
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
