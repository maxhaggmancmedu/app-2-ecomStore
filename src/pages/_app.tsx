import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import { CartContextProvider } from '@/context/CartContext'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  )
}
