const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    fullName: String!
    address: String!
    phoneNumber: String!
    emailAddress: String!
  }

  type Edge {
  cursor: String
  node: User
}

type PageInfo {
  endCursor: String
  hasNextPage: Boolean
}

type Response {
  edges: [Edge]
  pageInfo: PageInfo
}

  type Query {
    users(first: Int, after: String): Response
  }
`;

module.exports = { typeDefs };