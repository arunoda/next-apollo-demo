import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://faker-graphql.now.sh/graphql',
  cache: new InMemoryCache()
});

const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      { children }
    </ApolloHooksProvider>
  </ApolloProvider>);

export default ApolloClientProvider;