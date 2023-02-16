import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import casual from 'casual'


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return casual.name
        }
      }
    }
  })
})
