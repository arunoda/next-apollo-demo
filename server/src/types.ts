import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
// query resolver

const type = gql`
type Query {
    User: User
    UsersList(count: Int, page: Int): UserResponse
  }
type UserResponse {
  users: [User]
  hasNextPage: Boolean
}
type User {
   name: String
   email: String
   phoneNumber: String
   address: String
   image: String
  }
`;

export default type;
