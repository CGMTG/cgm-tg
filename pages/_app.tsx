import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as HttpProvider } from 'use-http'

import Layout from '../components/layout'

function Noteblock({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <HttpProvider>
        <Component {...pageProps} />
      </HttpProvider>
    </ChakraProvider>
  )
}

export default Noteblock
