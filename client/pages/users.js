import {useState, useEffect} from 'react';
import Head from 'next/head';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Grid from '../components/Grid';
import UserCard from '../components/UserCard';
import Button from '../components/Button/Button';

const MAX_USERS = 11;

const Users = ({users}) => {
  const [loadMore, setLoadMore] = useState({users: []});
  const toggleMore = () => setLoadMore(!loadMore);

  const renderedUsers = () => {
    if (loadMore === true) {
      return users;
    }

    return users.slice(0, MAX_USERS);
  };

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Layout>
        <h1 data-test="page-title">User Details</h1>

        <GridWrapper data-test="grid">
          <Grid>
            {renderedUsers().map((user) => {
              return (
                <UserCard
                  key={user.id}
                  firstname={user.firstname}
                  lastname={user.lastname}
                  address={user.address}
                  email={user.email}
                  phone={user.phone}
                />
              );
            })}
          </Grid>
        </GridWrapper>

        <Section>
          <div data-test="load-more">
            <Button onClick={toggleMore}>
              {loadMore ? 'Load more' : 'Load less'}
            </Button>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Users;

const GridWrapper = styled.div``;

const Section = styled.div`
  padding: 1.5em 0;
  text-align: center;
`;

export async function getServerSideProps() {
  const client = new ApolloClient({
    // server uri
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  const {data} = await client.query({
    query: gql`
      query GET_USER_DETAILS {
        users {
          id
          firstname
          lastname
          address
          email
          phone
        }
      }
    `,
  });

  //console.log('users-staticProps:::', data);

  return {
    props: {
      users: data.users,
    },
  };
}
