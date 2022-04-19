import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/client";


function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;