import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import global from '@/styles/global'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700'],
  variable: '--roboto', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Global styles={global} />
      <Component {...pageProps} />
    </main>
  )
}
