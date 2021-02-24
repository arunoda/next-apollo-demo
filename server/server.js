const { ApolloServer, gql } = require('apollo-server');
const  casual = require('casual');

const USER_QTY = 2000;
const USER_LIMIT = 20;

casual.define('user', function(id) {
    return {
        id,
        firstname: casual.first_name,
        lastname: casual.last_name,
        address: casual.address,
        city: casual.city,
        state: casual.state,
        country: casual.country,
        email: casual.email,
        phone: casual.phone
    };
}); 

let populateUsers = () => {
    const data = [];

    for (let i = 0; i < USER_QTY; ++i ) {
        data.push(casual.user(i));
    }

    return data;
};

const users = populateUsers();


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.
  type Users{
    id: String
    firstname: String
    lastname: String
    address: String
    city: String
    state: String
    country: String
    email: String
    phone: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "user" query returns an array of zero or more Users (defined above).
  type Query {
    users: [Users],
    get(from: Int): Int
  }
`

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves users from the "users" array above.
const resolvers = {
    Query: {
      users: () => users
    },
  };


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

