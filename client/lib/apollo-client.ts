import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: createHttpLink({
    uri: process.env.APOLLO_URI,
  }),
  cache: new InMemoryCache(),
});
