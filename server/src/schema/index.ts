import { gql } from "apollo-server-express";

export const PersonSchema = gql`
  type Person {
    id: ID!
    name: String
    age: Int
    address: String
    email: String
    phone: String
  }

  type Query {
    getPersons(limit: Int): [Person]
  }
`;

import {
  addMocksToSchema,
  mockServer,
  Ref,
  createMockStore,
  IMockStore,
  MockList,
  relayStylePaginationMock,
} from "@graphql-tools/mock";
import casual from "casual";
import { buildSchema, GraphQLSchema } from "graphql";
import {
  addResolversToSchema,
  makeExecutableSchema,
} from "@graphql-tools/schema";

// const typeDefs = /* GraphQL */ `
//   type User {
//     id: ID!
//     name: String!
//     friends(offset: Int!, limit: Int!): [User!]!
//   }
//   type Query {
//     me: User!
//   }
// `;
// const mocks = {
//   User: () => ({
//     name: casual.name,
//   }),
// };
// let schema: GraphQLSchema = makeExecutableSchema({ typeDefs });
// const store: any = createMockStore({ schema, mocks });

// const resolvers = {
//   User: {
//     name: (source: Ref) => {
//       return store.get(source, "name").toLowerCase();
//     },
//     friends: (userRef: any, { offset, limit }: any) => {
//       const fullList = store.get(userRef, "friends") as Ref[];
//       return fullList.slice(offset, offset + limit);
//     },
//   },
// };
// schema = addResolversToSchema(schema, resolvers);
// const schemaWithMocks = addMocksToSchema({
//   schema,
//   preserveResolvers: true,
// });

const typeDefs = /* GraphQL */ `
  type Item {
    id: ID!
    name: String
    age: Int
    address: String
    email: String
    phone: String
  }
  type ItemEdge {
    node: Item!
    cursor: String!
  }
  type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String!
    endCursor: String!
  }
  type ItemConnection {
    edges: [ItemEdge!]!
    pageInfo: PageInfo!
    totalCount: Int!
  }
  type Query {
    items(
      first: Int
      after: String
      last: Int
      before: String
      oddIndexOnly: Boolean
    ): ItemConnection!
  }
`;

const schema = buildSchema(typeDefs);
let mockedSchema: GraphQLSchema;
mockedSchema = addMocksToSchema({
  schema,
  mocks: {
    Query: {
      items: () => ({
        edges: [...new Array(2000)].map((_, index) => ({
          node: {
            name: casual.name,
            age: casual.integer(1, 120),
            address: casual.address,
            email: casual.email,
            phone: casual.phone,
          },
        })),
      }),
    },
  },
  resolvers: (store) => ({
    Query: {
      items: relayStylePaginationMock(store),
    },
  }),
});

export default mockedSchema;
