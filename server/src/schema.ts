import {  gql } from 'apollo-server';

export default  gql`
type Query {
  User: User
  UsersList(count: Int, page: Int): UserResponse
}
type UserResponse {
  users: [User]
  next: Boolean
}
type User {
  name: String
  email: String
  phoneNumber: String
  address: String
}
`;
