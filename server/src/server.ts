import {  ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolver';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});


server.listen().then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀  Server ready at ${url}`);
});