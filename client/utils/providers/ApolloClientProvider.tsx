import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

interface ApolloClientProviderProps {
  children: React.ReactNode | string;
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
});

const ApolloClientProvider = ({ children }: ApolloClientProviderProps): JSX.Element => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      {children}
    </ApolloHooksProvider>
  </ApolloProvider>);

export default ApolloClientProvider;