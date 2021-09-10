import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const Name = () => {
  const { loading, data, error } = useQuery(GET_NAME, {
    variables: { language: 'english' },
  });
  
  return (
    <span>
      {loading || error ? '..' : data.name}
    </span>
  );
}

const GET_NAME = gql`
  query name {
    name
  }
`

export default Name
