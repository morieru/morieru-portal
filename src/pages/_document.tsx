import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
