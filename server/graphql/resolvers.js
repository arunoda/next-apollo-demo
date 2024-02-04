import { employeeData } from "../data/index.js";

export const resolvers = {
  Query: {
    employees: async (_, { skip = 0, limit = 20 }) => {
      // added fake delay
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Return a paginated list of employees
      return employeeData.slice(skip, skip + limit);
    },
  },
};
