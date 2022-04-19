import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/graphql/queries'
import { UserCard } from '@/components/UserCard'
import { Button } from 'grommet'
import styled from 'styled-components'

const CustomContainer = styled.main`
  z-index: 1;
  margin-top: 128px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 128px;
`
const CustomNav = styled.nav`
  z-index: 2;
  width: 100vw;
  display: flex;
  background: white;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  padding: 12px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  box-shadow: 5px 10px 8px 4px rgba(1,1,1,.1);
`

export default function HomePage({ initialData }) {
  
  const initialOffset = 0;
  const batchSize = 20; 
  const { data, loading, error, fetchMore } = useQuery(GET_USERS, {
    variables: {
      offset: initialOffset,
      limit: batchSize
    }
  });
  
  if (error) {
    return (
      <span>Error</span>
    )
  }

  if (loading) {
    return (
      <pre>Loading...</pre>
    )
  }

  return (
    <>
    <CustomNav>
      <Button label="Load more" onClick={() =>
        fetchMore({
          variables: {
            offset: data.users.length,
            // limit: batchSize,
          }
      })}/>
    </CustomNav>
      <CustomContainer>
      {
        data.users.map((post) => (
          <UserCard
          key={post.id}
          content={{
            id: post.id,
            name: post.name,
            address: post.address,
            phone: post.phone,
          }} />
          ))
        } 
      </CustomContainer>
    </>
  )
}
