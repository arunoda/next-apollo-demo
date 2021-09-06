const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const resolvers = require('./resolvers');
const typeDefs = require("./typeDefs");

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(cors())

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });
  await server.start();
  server.applyMiddleware({ app });

  const port = process.env.PORT || 5000
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  })
}

startApolloServer(typeDefs, resolvers)