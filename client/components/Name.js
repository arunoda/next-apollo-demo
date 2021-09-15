import { gql, useQuery } from "@apollo/client"

const query = gql`
  query name {
    name
  }
`;

const Component = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <span>
      {loading? '..' : data?.name}
    </span>
  );
}



export default Component
