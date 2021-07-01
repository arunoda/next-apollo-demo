const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const faker = require("faker");

const fakeData = [...Array(2000).keys()].map((id) => ({
  id,
  name: faker.name.findName(),
  address: faker.address.streetAddress(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
}));

const getData = ({ limit, offset }) => {
  if (limit) {
    return fakeData.slice(offset, offset + limit);
  }
  return fakeData;
};

const personType = new GraphQLObjectType({
  name: "Person",
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
  },
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "person",
    fields: {
      persons: {
        type: new GraphQLList(personType),
        args: {
          limit: { type: GraphQLInt },
          offset: { type: GraphQLInt },
        },
        resolve: (parent, args) => {
          return getData(args);
        },
      },
    },
  }),
});
