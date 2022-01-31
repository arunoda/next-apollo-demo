const { gql } = require("apollo-server");

const typeDefs = gql`
  type Users {
    name: String,
    email: String,
    phone: String,
    address: String
  }

  type Query {
    name: String!,
    users: [Users],
  }

`;

module.exports = typeDefs;
