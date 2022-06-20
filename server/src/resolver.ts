import casual from "casual";


const DEFAULT_COUNT= 2000;
const BATCH_COUNT = 20;

export default {
  Query: {
    User: () => {
      const data = {
        name: casual.name,
        email: casual.email,
        phoneNumber: casual.phone,
        address: casual.address
      };
      return data;
    },
    UsersList(parent: any, { count = BATCH_COUNT, page = 1 }) {
      const users = new Array(count).fill(0).map((_) => ({
        name: casual.name,
        email: casual.email,
        phoneNumber: casual.phone,
        address: casual.address
      }));

      const next = count !== DEFAULT_COUNT && page * BATCH_COUNT < DEFAULT_COUNT;
      return { users, next };
    },
  },
};