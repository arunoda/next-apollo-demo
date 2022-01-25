// Imports: GraphQL
import { ApolloServer, Config } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './types';
import RESOLVERS from './resolvers';
// GraphQL: Schema
export default new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:5000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
} as Config<ExpressContext>) ;
