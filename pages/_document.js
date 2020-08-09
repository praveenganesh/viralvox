import "babel-polyfill";
import "core-js";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...page, styleTags, ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.11/core.min.js"></script>


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
