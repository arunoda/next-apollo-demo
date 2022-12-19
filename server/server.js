const express = require("express");
const { ApolloServer, graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const cors = require("cors");
// const userRouter = require('./routes/users.js');
const app = express();
const PORT = process.env.PORT || 4000;

// app configs.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/users', userRouter);
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: corsOptions
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}
startServer();

// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//initialize the app.
async function initialize() {
  app.listen(PORT);
};

initialize()
  .finally(
    () => console.log(`Graphql Server started on port:${PORT}`)
  );