import { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import '../styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }

export default MyApp;