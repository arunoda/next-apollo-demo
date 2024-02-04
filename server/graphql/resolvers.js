export const resolvers = {
    Query: {
      employees: async () => {
        const employeeData = [];
  
        for (let i = 2000; i > 0; i--) {
          employeeData.push({
            id: Math.floor(Math.random() * 1000000),
            firstName: `John`,
            lastName: `Doe`,
            email: `john.doe@mail.com`,
            phoneNumber: `0612345678`,
            address: {
              streetAddress: `123 Maple Street`,
              city: `Toronto`,
            },
          });
        }
  
        return employeeData;
      },
    },
  };
  