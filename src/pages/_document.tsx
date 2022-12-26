import Document, { Head, Html, Main, NextScript } from 'next/document'

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/icon.png' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
