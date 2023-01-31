import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import EmployeesDetails from "./EmployeesDetails";
import { gql } from "@apollo/client";

const query = gql`
  query Employees($limit: Int!, $offset: Int!) {
    employees(limit: $limit, offset: $offset) {
      name
      email
      phone
      address
    }
  }
`;

const mocks = [
  {
    request: {
      query: query,
      variables: {
        limit: 20,
        offset: 0,
      },
    },
    result: {
      data: {
        employees: {
          name: "XYZ",
          address: "ABCD",
          phone: "012345",
          email: "xyz@gmail",
        },
      },
    },
  },
];

it("displays a loading message when fetching", () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EmployeesDetails
        employees={[
          { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
        ]}
      />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree.children).toEqual(["Loading ..."]);
});
