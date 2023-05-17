import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'material-icons/iconfont/material-icons.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/ab085a1591.js'
          crossOrigin='anonymous'
        ></script>
        <title>DSAmazing - Visualizing Data Structures and Algorithms</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
