require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");

const schema = require("./schema");

const port = process.env.PORT;

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();
  app.use(cors());
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
