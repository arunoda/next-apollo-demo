import { gql } from "@apollo/client";
export const ITEMS_QUERY = gql`
  query Items($first: Int, $cursor: String) {
    items(first: $first, after: $cursor) {
      edges {
        node {
          name
          address
          email
          phone
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;
