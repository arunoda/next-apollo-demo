import { grommet, Grommet } from 'grommet';
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";


function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={grommet}>
        <Component {...pageProps} />
      </Grommet>
    </ApolloProvider>
  );
}

export default App;