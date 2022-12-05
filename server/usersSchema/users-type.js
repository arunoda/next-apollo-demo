const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

var AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
  }),
});
const UsersType = new GraphQLObjectType({
  name: "Users",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    address: {
      type: AddressType,
    },
    website: { type: GraphQLString },
  }),
});
module.exports = UsersType;
