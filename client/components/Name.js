import { gql, useQuery } from '@apollo/client';

const Name = () => {
  const { loading, data } = useQuery(GET_NAME);
  return (
    <span>
      {loading ? '..' : data}
    </span>
  )
}

const GET_NAME = gql`
  query GetName {
    name {
      name
    }
  }
`

export default Name;
