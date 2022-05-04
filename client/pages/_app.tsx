import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { GlobalProvider } from '../context/GlobalState';
import client from '../lib/apollo-client';
import '../styles/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ApolloProvider>
  );
};

export default App;
