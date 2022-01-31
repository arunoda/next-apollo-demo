const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const port = process.env.PORT || 5000;
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Graphql Server started on: http://localhost:${port}`);
});
