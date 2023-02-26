/* istanbul ignore file */
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.APOLLO_URI,
  cache: new InMemoryCache(),
});
