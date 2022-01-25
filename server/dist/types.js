"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports: GraphQL
const apollo_server_express_1 = require("apollo-server-express");
// GraphQL: TypeDefs
const type = (0, apollo_server_express_1.gql) `
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
exports.default = type;
//# sourceMappingURL=types.js.map