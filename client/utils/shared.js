import { gql } from "@apollo/client";

export const USER_NAME_QUERY = gql`
  query getName {
    name
  }
`;

export const ALL_USERS_QUERY = gql`
  query getName {
    users {
      name,
      email,
      phone,
      address,
    }
  }
`;