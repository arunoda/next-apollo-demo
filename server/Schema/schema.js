const UserRequest = require("../httpRequest/users");
const UserType = require("./users-type");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
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
