import { gql, useQuery } from "@apollo/client";

export const ALL_USERS_QUERY = gql`
  query getName {
    name
  }
`;

export default function NameComponent() {
  const { data } = useQuery(ALL_USERS_QUERY);

  return <span>{data?.name}</span>;
}
