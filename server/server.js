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
    details(offset: Int, limit: Int, search: String): [Detail]
  }
`;

const resolvers = {
  Query: {
    name: () => faker.name.findName(),
    details: (_, { offset, limit, search }) =>
      users
        .filter((user) =>
          user.name?.toLowerCase().includes(search?.toLowerCase() || "")
        )
        .filter(
          (user, index) => index >= offset && index < offset + (limit || 10)
        ),
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
