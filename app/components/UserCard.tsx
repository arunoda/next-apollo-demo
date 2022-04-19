import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries'

export const UserCard ({ initialData }): JSX.Element => {
  const { loading, error, data } = useQuery(GET_POSTS);
  return (
    <>
      <span>
        {data.loading ? '..' : data.name}
      </span>
      <pre>{JSON.stringify(initialData, null, 2)}</pre>
    </>
  )
}


