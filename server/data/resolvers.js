const faker = require('faker')
const people = require('./people')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    name: () => faker.name.findName(),
    people: () => people
  },
};

module.exports = resolvers;