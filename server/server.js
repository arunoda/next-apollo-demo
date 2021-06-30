require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { ApolloServer, gql } = require("apollo-server-express");

const schema = require("./schema");

const port = process.env.PORT;

console.log(process.env.NODE_ENV);

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();

  if (process.env.NODE_ENV === "production") {
    const corsOptions = {
      origin: process.env.APP_URL,
    };
    app.use(helmet());
    app.use(cors(corsOptions));
  }

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
