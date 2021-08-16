import { gql } from '@apollo/client';

export const getDetails = gql`
  query details {
    details {
      name
      address
      email
      phone
    }
  }
`;