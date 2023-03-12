/* istanbul ignore file */
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.APOLLO_URI,
  cache: new InMemoryCache(),
});
