import { ApolloServer, Config } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import TYPEDEFS from './types';
import RESOLVERS from '../resolvers/resolvers';

// GraphQL: Schema
export default new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:5000/graphql`, // graphQL client
    settings: {
      'editor.theme': 'light',
    },
  },
} as Config<ExpressContext>);
