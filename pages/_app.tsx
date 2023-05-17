import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'material-icons/iconfont/material-icons.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DSAmazing - Visualizing Data Structures and Algorithms</title>
      </Head>
      <Component {...pageProps} />
      <Script src='https://kit.fontawesome.com/ab085a1591.js' />
    </>
  )
}
