import { gql } from '@apollo/client';

export const getName = gql`
  query name {
    name
  }
`;