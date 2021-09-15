const { gql } = require('apollo-server-express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Person {
    name: String
    city: String
    email: String
    phone: String
  }

  type Query {
    name: String
    people: [Person]
  }
`;

module.exports = typeDefs;