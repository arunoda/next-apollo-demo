import {
  buildSchema
} from 'graphql'

import data from './data'

export const schema = buildSchema(`
    input UserInput {
        email: String!
        name: String!
    }

    type User {
        name: String!
        address: String!
    }

    type Query {
        getUsers: [User]
    }
`)

export const resolvers = {
  getUsers: () => data
}