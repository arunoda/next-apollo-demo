const {ApolloServer, gql} = require('apollo-server');
const casual = require('casual');

const typeDefs = gql`
type user {
  id: ID,
  lastName: String,
  firstName: String,
  address: String,
  email: String,
  phone: String
}
type userEdge {
  cursor: ID!,
  node: user!,
}
type userConnection {
  edges: [userEdge]
  pageInfo: PageInfo
}
type PageInfo {
  endCursor: ID!,
  hasNextPage: Boolean!,
}
type Query {
  users(first: Int!, cursor: ID): userConnection
}
`
casual.define('user', function (id) {
  return {
    id,
    firstName: casual.first_name,
    lastName: casual.last_name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  }
})

const usersRecords = function(userCount) {
  const result = [];

  for (var i = 0; i < userCount; ++i) {
      result.push(casual.user(i));
  }

  return result;
};


const resolvers = {
  Query: {
    users: (query, { cursor, first }) => {
      const users =  usersRecords(20);
       
      const cursorIndex = !cursor ? 0 : users.findIndex(user => user.id === cursor) + 1
      const sliceOfusers = users.slice(cursorIndex, cursorIndex + first)

      return {
        edges: sliceOfusers.map(user => ({ cursor: user.id, node: { ...user } })),
        pageInfo: {
          endCursor: sliceOfusers[sliceOfusers.length - 1].id,
          hasNextPage: cursorIndex + first < users.length,
        },
      }
    },
  },
}


// ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

// Server
server.listen({port: process.env.PORT || 4000}).then(({url}) => {
  console.log(`Backend Server started on ${url}`);
});