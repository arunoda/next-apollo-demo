const { ApolloServer }  = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const express = require('express')
const cors = require('cors')
const {createServer} = require('http');
const bodyParser = require('body-parser')

const resolvers = require('./data/resolvers')
const typeDefs = require('./data/typeDefs')

async function startApolloServer(typeDefs, resolvers) {
  const port = process.env.PORT || 5000
  const app = express();
  const httpServer = createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
            'endpoint': 'graphiql',
            'editor.theme': 'dark',
            'editor.fontSize': 14,
            'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`,
            'request.credentials': 'omit',
          }
      })
    ],
  });
  await server.start();
  app.use(cors())

  const middlewareOptions = {
    app: app,
    cors: true,
    bodyParser: bodyParser().json
  }
  server.applyMiddleware(middlewareOptions);

  await new Promise(resolve => httpServer.listen({ port: port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
