export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: Address;
};

type Address = {
  firstLine: string;
  street: string;
  city: string;
};
