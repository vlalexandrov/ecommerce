import { default as NextDocument, Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/fonts/gilroy/gilroy.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
