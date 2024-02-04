export const typeDefs = `#graphql
type Query {
    employees: [Employee]
}

type Employee {
    id: ID!
    firstName: String!
    lastName: String
    email: String
    phoneNumber: String
    address: Address
}

type Address {
    streetAddress: String
    city: String
}
`;