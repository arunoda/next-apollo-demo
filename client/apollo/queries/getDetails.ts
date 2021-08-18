import { gql } from '@apollo/client';

export const GET_DETAILS = gql`
  query details($offset: Int, $limit: Int, $search: String) {
    details(offset: $offset, limit: $limit, search: $search) {
      name
      address
      email
      phone
    }
  }
`;