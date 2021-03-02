import React from 'react';
import { ApolloProvider } from '@apollo/client'
import './index.css';
import Header from '../components/Header';
import client from '../lib/with-apollo';

const MyApp = ({ Component, pageProps }: any) => (
    <ApolloProvider client={client}>
        <Header />
            <Component {...pageProps} />
    </ApolloProvider>
)

export default MyApp;