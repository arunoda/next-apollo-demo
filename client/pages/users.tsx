import Link from 'next/link'
import Grid from '../components/Grid'
import gql from 'graphql-tag'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import User from '../components/User'

export interface IUser {
  name: string
  address: string
}

const GET_USERS = gql`
  query getUsers($pagination: Pagination) {
    getUsers(pagination: $pagination) {
      name
      address
    }
  }`;

export default () => {

  const { loadMore, data, loading} = useInfiniteScroll<IUser>({
    query: GET_USERS,
    field: 'getUsers'
  })

  return <div>
    <Grid 
      items={data} 
      loadMore={loadMore} 
      loading={loading} 
      getGridItem={(user: IUser) => <User key={user.name} {...user} />} 
    />
    <br/><br/>
    <Link href="/">Go Back</Link>
  </div>
}