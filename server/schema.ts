import {
  buildSchema
} from 'graphql'

import data from './data'

export const schema = buildSchema(`

    input Pagination {
      offset: Int
      limit: Int
    }

    type User {
        name: String!
        address: String!
    }

    type Query {
        getUsers(pagination: Pagination): [User]
    }
`)

export const resolvers = {
  getUsers: (args) => {

    const {pagination} = args
    
    // Just because pagination is optional, return all the data
    if(!pagination) return data

    // Using default offset and limit if not provided by the user
    const {offset = 0, limit = 20} = pagination

    return data.slice(offset, offset+limit)


  }
}