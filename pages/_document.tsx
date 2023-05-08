import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          src='https://kit.fontawesome.com/ab085a1591.js'
          crossOrigin='anonymous'
        ></script>
        <title>DSAmazing - Visualizing Data Structures and Algorithms</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
