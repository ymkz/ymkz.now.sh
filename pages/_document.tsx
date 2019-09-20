import NextDocument, { Head, Main, NextScript } from 'next/document'
import React from 'react'

import { WebappManifest } from '~/components/abstracts/webapp-manifest'

class Document extends NextDocument {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="ymkz's portfolio site" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,900&font-display=swap"
          />
          <WebappManifest />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
