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

const Users = () => {

  const { loadMore, data, loading} = useInfiniteScroll<IUser>({
    query: GET_USERS,
    field: 'getUsers'
  })

  return (<div>
    <ol>
      {data?.map(u => <User key={u.name} {...u} />)}
    </ol>

    <button disabled={loading} onClick={loadMore}>Load More</button>
  </div>)
 
}
 
export default Users
