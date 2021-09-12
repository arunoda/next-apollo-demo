import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const uri = process.env.NEXT_PUBLIC_URI || 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri,
  cache,
});
