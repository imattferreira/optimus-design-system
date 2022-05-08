import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { FontsConfig } from '../lib/components';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <FontsConfig />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
