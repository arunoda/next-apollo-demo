import faker from 'faker';
import { DEFAULT_COUNT } from './util/helper';
// GraphQL: Resolvers
export default {
    Query: {
      User: () => {
        const data = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            image: faker.image.avatar()
        }
      return data
    },
    UsersList(parent: any, { count = DEFAULT_COUNT, page = 1 }) {
      const users = new Array(count).fill(0).map(_ => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            image: faker.image.avatar()
      }));
      // this logic can be changes based on requirement
      const hasNextPage = count !== DEFAULT_COUNT && (page*10) < DEFAULT_COUNT
      return { users, hasNextPage};
    },
  }
};

// export default resolver;
