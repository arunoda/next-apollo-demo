export type Employee = {
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
