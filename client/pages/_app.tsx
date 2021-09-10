import React from 'react'
import type { AppProps } from 'next/app'
import ApolloClientProvider from '../utils/providers/ApolloClientProvider'

const App = ({ Component, pageProps }: AppProps): JSX.Element => <ApolloClientProvider><Component {...pageProps} /></ApolloClientProvider>

export default App