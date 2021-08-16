const faker = require("faker");

module.exports = {
  users: Array.from(Array(2000)).map(() => ({
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  })),
};
