import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

import EmployeesList from "./index";
import { GET_EMPLOYEES_QUERY } from "../../gql/GetEmployees";

const errorMock = {
  request: {
    query: GET_EMPLOYEES_QUERY,
    variables: { skip: 0, limit: 21 },
  },
  error: new Error("An error occurred"),
};

it("displays error message on query error", async () => {
  render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <EmployeesList />
    </MockedProvider>
  );

  const errorMessage = await screen.findByText(/error!/i);
  expect(errorMessage).toBeInTheDocument();
});

const mocks = [
  {
    request: {
      query: GET_EMPLOYEES_QUERY,
      variables: { skip: 0, limit: 21 },
    },
    result: {
      data: {
        employees: [
          {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phoneNumber: "123456789",
            address: { streetAddress: "123 Main St", city: "Anytown" },
          },
        ],
      },
    },
  },
];

it("renders employees after query success", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EmployeesList />
    </MockedProvider>
  );

  expect(await screen.findByText("John Doe")).toBeInTheDocument();
});
