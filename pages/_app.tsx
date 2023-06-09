import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import global from '@/styles/global'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
})

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <main className={roboto.className}>
        <Global styles={global} />
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}
