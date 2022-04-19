import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  # Types
  type Address {
    building: String
    street: String
    city: String
    region: String
    country: String
    postCode: String
  }
  type Phone {
    countryCode: String
    number: String
  }
  type Name {
    firstName: String 
    lastName: String
  }
  type User {
    id: ID!
    name: Name
    phone: Phone
    address: Address
    email: String
  }
  # Queries
  type Query {
    users(offset: Int, limit: Int): [User]
  }
`;
