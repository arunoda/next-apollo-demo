import casual from "casual";
import { MockList } from "@graphql-tools/mock";

export const PersonDataMock = {
  Query: () => ({
    getPersons: (root: any, args: any) => {
      console.log(args);
      return new MockList(20);
    },
  }),
  Person: () => ({
    name: casual.name,
    age: () => casual.integer(0, 120),
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  }),
};
