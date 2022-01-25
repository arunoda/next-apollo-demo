"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports: GraphQL
const apollo_server_express_1 = require("apollo-server-express");
// Imports: GraphQL TypeDefs & Resolvers
const types_1 = __importDefault(require("./types"));
const resolvers_1 = __importDefault(require("./resolvers"));
// GraphQL: Schema
exports.default = new apollo_server_express_1.ApolloServer({
    typeDefs: types_1.default,
    resolvers: resolvers_1.default,
    playground: {
        endpoint: `http://localhost:5000/graphql`,
        settings: {
            'editor.theme': 'light'
        }
    }
});
//# sourceMappingURL=schema.js.map