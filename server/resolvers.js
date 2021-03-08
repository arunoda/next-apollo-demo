const faker = require("faker");

module.exports = {
  Query: {
    name: () => faker.name.findName(),
  },
};
