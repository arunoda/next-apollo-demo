import React from 'react';
import './index.css';
import Header from '../components/Header';
import {ApolloProvider} from '@apollo/client'
import client from '../lib/with-apollo';

const MyApp = ({ Component, pageProps }: any) => (
    <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
    </ApolloProvider>
)

export default MyApp;