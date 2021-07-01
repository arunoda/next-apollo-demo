import getConfig from 'next/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.apiUrl);

const client = new ApolloClient({
  uri: publicRuntimeConfig.apiUrl,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          persons: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
