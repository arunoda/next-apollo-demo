import casual from "casual";

type Employee = {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  address: Address;
};

type Address = {
  firstLine: String;
  street: String;
  city: String;
};

export const resolvers = {
  Query: {
    employees: async () => {
      const employeeData = [] as Employee[];

      for (let i = 2000; i > 0; i--) {
        employeeData.push({
          id: Math.floor(Math.random() * 1000000),
          firstName: casual.first_name,
          lastName: casual.last_name,
          email: casual.email,
          phoneNumber: casual.phone,
          address: {
            firstLine: casual.address1,
            street: casual.street,
            city: casual.city,
          },
        });
      }

      return employeeData;
    },
  },
};
