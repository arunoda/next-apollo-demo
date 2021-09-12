const casual = require('casual')

const users = new Array(2000).fill({
  id: casual._unix_time, 
  name: casual._name, 
  address: {
    country: casual._country, 
    city: casual._city, 
    zip: casual._zip, 
    street: casual._street, 
    address: casual._address, 
    address1: casual._address1, 
    address2: casual._address2, 
  }, 
  email: casual._email, 
  phoneNumber: casual._phoneNumber, 
})

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')
const faker = require('faker')
// const { GraphQLInt } = require('graphql/type')

const userAddress = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    zip: { type: GraphQLString },
    street: { type: GraphQLString },
    address: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString }
  })
})

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: userAddress },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName()
        }
      },
      users: {
        type: new GraphQLList(userType),
        args: {
          limit: {
            name: 'limit',
            type: GraphQLInt
          },
          offset: {
            name: 'offset',
            type: GraphQLInt
          },
        },
        resolve(source, args) {
          const { limit, offset } = args

          return users.slice(offset, offset + limit)
        }
      }
    }
  })
})
