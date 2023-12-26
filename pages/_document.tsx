import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            @font-face {
              font-family: 'VesterbroPoster';
              src: url('/fonts/VesterbroPoster.woff2') format('woff2'),
                   url('/fonts/VesterbroPoster.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;