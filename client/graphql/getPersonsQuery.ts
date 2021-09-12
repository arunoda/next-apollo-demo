import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
  query Persons($offset: Int, $limit: Int) {
    persons(offset: $offset, limit: $limit) {
      id
      name
      address
      email
      phone
      __typename
    }
    __typename
  }
`;
