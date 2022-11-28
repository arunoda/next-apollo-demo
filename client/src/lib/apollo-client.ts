import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { uri } from './constant';

// Init Apollo Client
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          UsersList: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
