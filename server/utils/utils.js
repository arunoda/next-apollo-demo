const casual = require("casual");

const generateUsers = () => {
  return {
    id: casual.uuid,
    name: casual.name,
    address: {
      city: casual.city,
      zipcode: casual.zip((digits = 5 - 9)),
      street: casual.street,
      suite: casual.address,
    },
  };
};
const createRandomUsers = function () {
  const USERS = [];
  return {
    setUsers() {
      Array.from({ length: 100 }).forEach(() => {
        USERS.push(generateUsers());
      });
    },
    getUsers() {
      return USERS;
    },
  };
};

const usersData = createRandomUsers();

module.exports = usersData;
