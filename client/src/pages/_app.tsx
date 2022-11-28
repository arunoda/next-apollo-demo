/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AppProvider } from '../context/context';
import client from '../lib/apollo-client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
}
