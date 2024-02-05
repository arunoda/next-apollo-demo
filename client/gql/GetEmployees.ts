import { gql, useQuery } from "@apollo/client";

export const GET_EMPLOYEES_QUERY = gql`
  query GetEmployees($skip: Int!, $limit: Int!) {
    employees(skip: $skip, limit: $limit) {
      id
      firstName
      lastName
      email
      phoneNumber
      address {
        streetAddress
        city
      }
    }
  }
`;
