import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import schemaWithMocks from "./mock";
const PORT = process.env.PORT || "5000";

async function listen(port: string) {
  const app = express();
  const httpServer = http.createServer(app);
  const corsOptions = {
    origin: [
      "http://localhost:3000",
      `https://nextjs-apollo-2tvjvfepu-yogigoodman.vercel.app`,
      "https://studio.apollographql.com",
    ],
  };

  app.get("/", (req, res) => {
    res.send(`Server Ready at ${port}`);
  });
  const server = new ApolloServer({
    schema: schemaWithMocks,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
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
    await listen(PORT);
    console.log(`Server is ready at ${PORT}`);
  } catch (err) {
    console.error("Error starting the node server", err);
  }
}

void main();
