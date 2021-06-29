/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const getPersonsQuery = gql`
  query getPersons ($limit: Int!, $offset: Int!) {
    persons(limit: $limit, offset: $offset) {
      name
      address
      email
      phone
    }
  }
`;
