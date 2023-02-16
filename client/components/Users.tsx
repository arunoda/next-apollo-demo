import React from 'react'
import gql from 'graphql-tag'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import User, { IUser } from './User';

const GET_USERS = gql`
  query getUsers($pagination: Pagination) {
    getUsers(pagination: $pagination) {
      name
      address
    }
  }`;

const Users = ({users}) => {

  const { loadMore, data, loading} = useInfiniteScroll<IUser>({
    query: GET_USERS,
    field: 'getUsers'
  })

  return (<main>
            <div className='container'>
              {data?.map(u => <User key={u.name} {...u} />)}
            </div>

            <button disabled={loading} onClick={loadMore}>Load More</button>
  </main>)
 
}
 
export default Users
