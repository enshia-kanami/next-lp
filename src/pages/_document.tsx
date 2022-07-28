import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import News from '@/components/layouts/News/News';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <>
        <Html lang='ja' dir='ltr'>
          <Head>
            {/* サイト全体に反映させたいデフォルトの設定を記述する ex) Google Fonts の読み込み */}
          </Head>
          <Main />
          <NextScript />
          <News />
        </Html>
      </>
    );
  }
}

export default MyDocument;
