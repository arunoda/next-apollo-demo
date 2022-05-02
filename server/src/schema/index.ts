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
export default typeDefs;
