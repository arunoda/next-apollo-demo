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
    
    if(!pagination) return data

    const {offset = 0, limit = 20} = pagination

    return data.slice(offset, offset+limit)


  }
}