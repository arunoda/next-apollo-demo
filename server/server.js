const faker = require("faker");
const { ApolloServer, gql } = require("apollo-server");
const { users } = require("./mock");

const typeDefs = gql`
  type Detail {
    name: String!
    address: String
    email: String
    phone: String!
  }
  type Query {
    name: String!
    details: [Detail]
  }
`;

const resolvers = {
  Query: {
    name: () => faker.name.findName(),
    details: () => users.filter((u) => u.name.startsWith('A')),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
