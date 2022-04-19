import { generateUsers } from '@/utils';

export const resolvers = {
  Query: {
    users: (parent, args, context, _): Array<User> => {
      let { offset, limit } = args;
      if (offset < 0) {
        offset = 0;
      }
      // const cursor = offset * limit;
      console.log({
        message: 'incoming req',
        offset,
        limit,
      })
      const data = context.mockData.slice(offset, offset + limit)
      console.log({
        ...data
      })
      return data;
    },
  },
};