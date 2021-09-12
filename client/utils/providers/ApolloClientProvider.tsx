import React from 'react';

import { ApolloProvider as ApolloHooksProvider, ApolloClient, InMemoryCache } from '@apollo/react-hooks'

interface ApolloClientProviderProps {
  children: React.ReactNode | string;
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: {
            keyArgs: false,
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },
          }
        }
      }
    }
  })
});

const ApolloClientProvider = ({ children }: ApolloClientProviderProps): JSX.Element => (
  <ApolloHooksProvider client={client}>
    {children}
  </ApolloHooksProvider>);

export default ApolloClientProvider;