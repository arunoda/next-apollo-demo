import { generateUsers } from '@/utils';


export const resolvers = {
  Query: {
    users: (parent, args, context, _): Array<User> => {
      let { offset, limit } = args;
      if (offset < 1) {
        offset = 1;
      }
      const cursor = offset * limit;
      const data = context.mockData.slice(cursor, cursor + limit);
      return data;
    },
  },
};