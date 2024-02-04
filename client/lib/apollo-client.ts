import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  const uri = process.env.API_URI || `http://localhost:5000/graphql`;
  return new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });
};
