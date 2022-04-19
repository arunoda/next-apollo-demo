import Head from 'next/head';
import axios from 'axios';
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { Button } from 'grommet'
import 'animate.css'

import { GET_USERS } from '@/graphql/queries'
import { UserCard } from '@/components/UserCard'

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

export default function HomePage({ initialData}) {
  
  const paging = { offset: 20, limit: 20 };
  const { data, error, fetchMore } = useQuery(GET_USERS, {
    variables: {
      offset: paging.offset,
      limit: paging.limit
    }
  });
  
  if (error) {
    return (
      <span>Error</span>
    )
  }

  return (
    <>
      <Head>
        <title>GraphQL example</title>
        <meta name="description" content= "GraphQL example app" />
        <meta name="robots" content= "index, nofollow"></meta>
      </Head>
      <CustomNav>
        <Button label="Load more" onClick={() =>
          fetchMore({
            variables: { offset: data.users.length }
          })}/>
      </CustomNav>
      <CustomContainer>
        {
          /* Server side Props */
          !data && initialData && (
            <pre>{JSON.stringify(initialData, null, 2)}</pre>
          )
        }
        {
          /* Client side update */
          data?.users && data.users.map((post) => (
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

export async function getInitialProps(ctx) {
  const initialData = await axios({
    url: '/api/graphql',
    method: 'post',
    data: {
      query: `
        query Users ($offset: Int, $limit: Int) {
          users (offset: 0, limit: 20){
            id
            name {
              firstName
              lastName
            }
            phone {
              countryCode
              number
            }
            address {
              building
              street      
              city
              region
              country
              postCode
            }
          }
        }
      `
    }
  });

  return {
    props: {
      initialData
    }
  }
}
