import * as dotenv from "dotenv";
dotenv.config();
import { blue, red } from "colors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

interface ApolloServerProps {
  token?: string;
}

const server = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<ApolloServerProps>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT || 8000 }, resolve)
  );
  console.log(
    blue.bold(
      `🚀 Server ready at http://localhost:${process.env.PORT || 8000}/graphql`
    )
  );
};
server().catch((e) => console.log(red.bold(`Error starting the server: ${e}`)));
