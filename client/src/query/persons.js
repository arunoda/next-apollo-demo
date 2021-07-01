/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const GET_PERSONS_QUERY = gql`
  query ($limit: Int!, $offset: Int!) {
    persons(limit: $limit, offset: $offset) {
      id
      name
      address
      email
      phone
    }
  }
`;
