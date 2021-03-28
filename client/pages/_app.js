import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import '../styles/globals.css';

const client = new ApolloClient({
  // this is the server uri
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default function MyApp({Component, pageProps}) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
