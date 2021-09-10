import React from 'react'
import ApolloClientProvider from '../utils/providers/ApolloClientProvider'

const App = ({ Component, pageProps }) => <ApolloClientProvider><Component {...pageProps} /></ApolloClientProvider>
  
export default App