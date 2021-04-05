const {ApolloServer, gql} = require('apollo-server');
const casual = require('casual');

const MAX_USERS = 2000;
const MIN_USERS = 40;

// Generate some data from 'casual'
casual.define('user', function (id) {
  return {
    id,
    firstname: casual.first_name,
    lastname: casual.last_name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  };
});

// Render Users
let renderUsers = () => {
  const data = [];

  for (let i = 0; i < MAX_USERS; i++) {
    data.push(casual.user(i));
  }

  return data;
};

const users = renderUsers();

// Schema is the contract between the FE & BE. It's an abstract layer.
// Schema is a collection of different types:
// string, boolean, number, id, int, float, object etc.

// It is a good practice to document the schema with descriptions

// Define types
const typeDefs = gql`
  # 'User' type below defines the fields for every user
  type Users {
    id: String
    firstname: String
    lastname: String
    address: String
    email: String
    phone: String
  }

  # 'Query' type can have multiple queries
  # Below query returns an array of 'Users'
  type Query {
    users: [Users]
  }
`;

// Resolvers fetch the type Definitions from the schema
const resolvers = {
  Query: {
    users: () => users,
  },
};

// ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

// Server
server.listen({port: process.env.PORT || 4000}).then(({url}) => {
  console.log(`Graphql Server started on ${url}`);
});
