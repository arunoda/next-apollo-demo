export const typeDefs = `#graphql
    type Query {
        name: String
        users(limit: Int, offset: Int): [User]
    }
    
    type User {
        name: String
        email: String
        phoneNumber: String
        address: Address
    }
    
    type Address {
        street: String
        city: String
        zipCode: String
    } 
`;
