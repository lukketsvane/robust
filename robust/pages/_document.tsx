import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Link to the external font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Vesterbro:wght@700&display=swap"
          />
        </Head>
        <body style={{ fontFamily: 'Inter, sans-serif' }}> {/* Apply the font directly to the body */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
