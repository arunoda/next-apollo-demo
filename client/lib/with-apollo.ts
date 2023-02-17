import { withApollo } from 'next-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_SERVER

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri,
  }),
  cache: new InMemoryCache()
});

export default withApollo(apolloClient)
