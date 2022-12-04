import { gql } from "@apollo/client";

const GET_USERS = gql`
  query users($offset: Int!, $limit: Int!) {
    users(offset: $offset, limit: $limit) {
      id
      name
      address {
        city
        zipcode
        suite
        street
      }
    }
  }
`;

export { GET_USERS };
