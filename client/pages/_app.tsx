import React from 'react';
import './index.css';
import Header from '../components/Header';
import { ApolloProvider } from '@apollo/client'
import client from '../lib/with-apollo';
import ScrollToTop from '../components/ScrollToTop';

const MyApp = ({ Component, pageProps }: any) => (
    <ApolloProvider client={client}>
        <Header />
        <ScrollToTop>
            <Component {...pageProps} />
        </ScrollToTop>
    </ApolloProvider>
)

export default MyApp;