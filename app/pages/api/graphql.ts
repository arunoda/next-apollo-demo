import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs, resolvers } from '@/graphql'
import { generateUsers } from '@/utils'


// const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    mockData: generateUsers(2000),
  }
});
const startServer = apolloServer.start();

async function applyNextHeaders(request, response) {
  response.setHeader('Access-Control-Allow-Credentials', 'true')
  response.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (request.method === 'OPTIONS') {
    response.end()
    return false
  }
}

export default async function handler(req, res) {
  await applyNextHeaders(req, res);
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}