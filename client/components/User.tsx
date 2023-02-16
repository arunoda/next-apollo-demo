import React from 'react'
import gql from 'graphql-tag'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

export interface IUser {
  name: string
  address: string
}

const User = ({name, address}: IUser) => {

  return (
    <>
      <h3>{name}</h3>
      <p>{address}</p>
    </>

  )
 
}
 
export default User
