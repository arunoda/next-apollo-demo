const UserRequest = require("./httpRequest/users");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const Users = new GraphQLObjectType({
  name: "Users",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    address: {
      type: new GraphQLObjectType({
        name: "address",
        fields: {
          street: { type: GraphQLString },
          suite: { type: GraphQLString },
          city: { type: GraphQLString },
          zipcode: { type: GraphQLString },
        },
      }),
    },
    website: { type: GraphQLString },
  },
});

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(Users),
      args: { offset: { type: GraphQLInt }, limit: { type: GraphQLInt } },
      async resolve(parent, args) {
        const userList = await UserRequest();
        if (args.limit) {
          const start = args.offset;
          const end = args.limit;
          return userList.slice(start, end);
        } else {
          return userList;
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query,
});
