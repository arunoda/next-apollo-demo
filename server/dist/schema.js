export default `
  type Employee {
    name: String!
    address: String!
    email: String!
    phone: String!
  }
  type Query {
    employees(limit : Int!, offset: Int!): [Employee]
  }`;
