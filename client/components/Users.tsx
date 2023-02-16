import React from 'react'
import gql from 'graphql-tag'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const GET_USERS = gql`
  query getUsers($pagination: Pagination) {
    getUsers(pagination: $pagination) {
      name
      address
    }
  }`;

const Users = () => {

  const { loadMore, data, loading, error} = useInfiniteScroll({
    query: GET_USERS,
    field: 'getUsers'
  })

  return (<div>
    <ol>
      {data && data.map(u => <li key={u.name}>{u.name}</li>)}
    </ol>

    <button disabled={loading} onClick={loadMore}>Load More</button>
  </div>)
 
}
 
export default Users
