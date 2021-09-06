const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query{
    users(page:Int, perPage:Int, name:String): [User]
  }
  type User {
    name: String
    address: String
    email: String
    phone: String
  }
`;

module.exports= typeDefs;