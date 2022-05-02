import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import client from './api/apollo-client';

function MyApp({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
