import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'material-icons/iconfont/material-icons.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
