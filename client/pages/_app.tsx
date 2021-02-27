import React from 'react';
import './index.css';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: any) => (
    <>
        <Header />
        <Component {...pageProps} />
    </>
)

export default MyApp;