const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Contact {
        name: String!,
        address: String!,
        phone: String!,
        email: String!
    }
    type Query {
        contacts(limit:Int,offset:Int):[Contact!]!
    }
`;

module.exports= typeDefs;