const faker = require("faker");

const getUsers = () => {
  const usersList = [];
  for (let index = 1; index <= 2000; index++) {
    usersList.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
    });
  }

  return usersList;
}

module.exports = {
  Query: {
    name: () => faker.name.findName(),
    users: () => getUsers(),
  },
};