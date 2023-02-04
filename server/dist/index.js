const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
var casual = require('casual');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
# This "user" type defines the queryable fields: 'name', 'address', 'email, phone and id.
type User {
  id: String,
  name: String,
  address: String,
  email: String,
  phone: String
}
type Query {
  users: [User],
  get(from: Int): Int
}
`;
casual.define('user', function (id) {
    return {
        id,
        name: casual.name,
        address: casual.address,
        email: casual.email,
        phone: casual.phone,
    };
});
const allUsers = () => {
    let data = [];
    for (let i = 0; i < 2000; i++) {
        data.push(casual.user(i));
    }
    return data;
};
const resolvers = {
    Query: {
        users: () => allUsers(),
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const startServer = async () => {
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
};
startServer();
