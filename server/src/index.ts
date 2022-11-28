import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import casual from "casual";

const TOTAL_USERS= 2000;
const FETCH_USERS_AT_A_TIME = 20;
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type UserResponse {
    users: [User]
    next: Boolean
  }
  type User {
    name: String
    email: String
    phoneNumber: String
    address: String
  }
  type Query {
    User: User
    UsersList(count: Int, page: Int): UserResponse
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      User: () => {
        const data = {
          name: casual.name,
          email: casual.email,
          phoneNumber: casual.phone,
          address: casual.address
        };
        return data;
      },
      UsersList(parent: any, { count = FETCH_USERS_AT_A_TIME, page = 1 }) {
        const users = new Array(count).fill(0).map((_) => ({
          name: casual.name,
          email: casual.email,
          phoneNumber: casual.phone,
          address: casual.address
        }));
  
        const next = count !== TOTAL_USERS && page * FETCH_USERS_AT_A_TIME < TOTAL_USERS;
        return { users, next };
      },
    },
  };

// The ApolloServer constructor requires two parameters: your schema
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: new InMemoryLRUCache(),
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);

  
