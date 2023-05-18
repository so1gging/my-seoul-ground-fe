import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import global from '@/styles/global'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Global styles={global} />
      <Component {...pageProps} />
    </main>
  )
}
