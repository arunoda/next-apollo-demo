import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import schemaWithMocks from "./schema";
import { PersonSchema } from "./schema";
import { PersonDataMock } from "./mock";

async function listen(port: number) {
  const app = express();
  const httpServer = http.createServer(app);
  const corsOptions = {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  };
  const server = new ApolloServer({
    schema: schemaWithMocks,
    // typeDefs: PersonSchema,
    // mocks: PersonDataMock,
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  server.applyMiddleware({
    app,
    cors: corsOptions,
    path: "/graphql",
  });
  return new Promise((resolve, reject) => {
    httpServer.listen(port).once("listening", resolve).once("error", reject);
  });
}

async function main() {
  try {
    await listen(5000);
    console.log("Server is ready at http://localhost:5000/graphql");
  } catch (err) {
    console.error("Error starting the node server", err);
  }
}

void main();
