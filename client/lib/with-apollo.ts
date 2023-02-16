import { withApollo } from 'next-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: "http://localhost:5001/graphql",
  }),
  cache: new InMemoryCache()
});

export default withApollo(apolloClient)
