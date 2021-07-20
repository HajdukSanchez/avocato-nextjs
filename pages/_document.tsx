import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* FavIcons */}
          {/* Style Sheets */}
          {/* Scripts */}
          {/* WebFonts */}
        </Head>
        {/* We can modify the body class */}
        <body>
          <Main />
          <NextScript />
          {/* We can add other points static for the page */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
