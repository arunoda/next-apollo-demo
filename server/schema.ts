import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import faker from "faker";

function generateTwoHousandsNames() {
  const listOfPersons = [];
  
  for (let i = 0; i <= 2000; i++) {
    listOfPersons.push({
      id: i,
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    });
  }

  return listOfPersons;
}

const listOfNames = generateTwoHousandsNames();

const PersonType = GraphQLList(new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  }
}));

const PersonsArgs = {
  offset: {
    type: GraphQLInt
  },
  limit: {
    type: GraphQLInt
  }
};

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Persons',
    fields: {
      persons: {
        type: PersonType,
        args: PersonsArgs,
        resolve(root, args) {
          return listOfNames.slice(args.offset, (args.offset + args.limit));
        },
      },
    },
  }),
});
