import {gql} from '@apollo/client';

export const GET_USERS_INFO = gql`
  query GET_USERS_INFO ($cursor: ID) {
    users (first: 20, cursor: $cursor) {
      edges {
        node {
           id
          firstName
          lastName
          address
          email
          phone
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;


