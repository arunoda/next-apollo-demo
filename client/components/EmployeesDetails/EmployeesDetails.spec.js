import { MockedProvider } from "@apollo/client/testing";
import EmployeesDetails from "./EmployeesDetails";
import { gql } from "@apollo/client";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

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

const successMock = [
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

const errorMock = [
  {
    request: {
      query: query,
      variables: {
      },
    },
    result: {
      error: {
      }
    },
  },
];

describe("EmployeesDetails", () => {
  it("displays a loading message when fetching", async () => {
    render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <EmployeesDetails
          employees={[
            { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
          ]}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading ...')).toBeInTheDocument();
    })
  });
  it("displays an error message when on failure", () => {
    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <EmployeesDetails
          employees={[
            { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
          ]}
        />
      </MockedProvider>
    );

    waitFor(() => {
      const button = screen.findByText('Load more');
      fireEvent.click(button);
      expect(screen.queryByText('Error')).toBeInTheDocument();
    })
  });

  it("displays the response on success", async () => {
    render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <EmployeesDetails
          employees={[
            { name: "XYZ", address: "ABCD", phone: "012345", email: "xyz@gmail" },
          ]}
        />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('XYZ')).toBeInTheDocument();
    })
  })
});
