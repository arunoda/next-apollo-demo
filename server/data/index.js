import casual from "casual";

export const employeeData = [];

for (let i = 2000; i > 0; i--) {
  employeeData.push({
    id: casual.uuid,
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    phoneNumber: casual.phone,
    address: {
      streetAddress: casual.address1,
      city: casual.city,
    },
  });
}
