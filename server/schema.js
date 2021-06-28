import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
}  from "graphql";
import faker  from "faker";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName();
        },
      },
    },
  }),
});
