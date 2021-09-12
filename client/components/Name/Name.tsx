import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

interface NameData {
  name: string;
}

const Name = (): JSX.Element => {
  const { loading, data, error } = useQuery<NameData>(GET_NAME, {
    variables: { language: 'english' },
  });

  return (
    <span>
      {loading || error ? '..' : data?.name}
    </span>
  );
}

const GET_NAME = gql`
  query name {
    name
  }
`

export default Name
