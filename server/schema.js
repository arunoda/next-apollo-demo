const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const faker = require('faker')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName()
        }
      }
    }
  })
})
